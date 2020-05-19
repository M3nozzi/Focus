import React, {Component} from 'react';
import { Card, Avatar, Col, Typography, Row } from 'antd';
import axios from "axios";
import Loading from '../tools/Loading';
// import ThemeToggle from "../WatchVideos/ChangeTheme/ThemeToggle";
import FormPlaylist from "../Content/FormPlaylist";



const { Title } = Typography;
const { Meta } = Card;



class ContentFollowed extends Component {
    

    constructor(props) {
        super(props);
        console.log("PROPS DO CONTENT FOLLLOW", props);
        this.state = {
            content: [],
        }
        this.getContentPlaylist = this.getContentPlaylist.bind(this);
        
    }

    
    getContentPlaylist() {
        
        const { id } = this.props.match.params;
        axios.get(`http://localhost:5000/api/contents/` + id, {
            withCredentials:true,
            })
            .then(response => {
                console.log("RESPOSTA DO AXIOS NO CONTENT FOLLOW:", response);
                this.setState({
                    content: response.data,
                })
            })   
            .catch(error => console.log(error));
    }

    componentDidMount() {

        this.getContentPlaylist();
    }
    
    
    render() {

        if (!this.state.content || this.state.content.length === 0) {
             return <Loading />
                 
        } 
        
        return(  
        // <div>
            <div style={{ width: '85%', margin: '3rem auto' }}>
                <Title level={2}> {this.state.content.name} </Title>
                <hr />
                <Row gutter={16}>
            
                {this.state.content.playlist.map((playlist, index) => {
                    return (
                        <Col key={index} lg={6} md={8} xs={24}>
                            <div style={{ position: 'relative' }}>
                                {/* <a href={`/videos/${playlist._id}`}>
                                    <img style={{ width: '100%' }} alt='thumbnail' src={playlist.playlistImage} />
                                </a> */}
                                <iframe id="ytplayer" type="text/html" width="520" height="340"
                                    src={`https://www.youtube.com/embed/?listType=playlist&list=` + playlist.playlistUrl}
                                    frameBorder="0" allowFullScreen>   </iframe>
                            </div><br />
                            <Meta
                                avatar={
                                    <Avatar src={this.state.content.icon ? this.state.content.icon : "https://res.cloudinary.com/menozzi/image/upload/v1589837435/focus/computer_device_electronic_entertainment_imac_mobile-1320191161433469763_vkp1jf.png"} />
                                }
                                title={playlist.name}
                            />
                            {/* <span>{playlist.name}</span> <br /> */}
                        </Col>
                    );
                    })};
                }
            <FormPlaylist theContent={this.state.content} getTheContent={this.getContentPlaylist}/>
                </Row>
            {/* </div>
                <div>
                <div>
                <iframe id="ytplayer" type="text/html" width="420" height="240"
                    src="https://www.youtube.com/embed/?listType=playlist&list=PL_VhV5m_X3BK-j1rqyOG5j7FraqSEIxVw"
                    frameborder="0" allowfullscreen>   </iframe>
                </div>
                
                <div>
                <iframe id="ytplayer" type="text/html" width="720" height="540"
                        src="https://www.youtube.com/embed/?listType=playlist&list=PL_VhV5m_X3BK-j1rqyOG5j7FraqSEIxVw"
                frameborder="0" allowfullscreen></iframe>                    
                </div>
                </div> */}
            {/* <ThemeToggle/> */}
        </div>  
            
        );
    }
            
}
        
export default ContentFollowed;
        
     
