import React, {Component} from 'react';
import { Card, Avatar, Col, Typography, Row } from 'antd';
import axios from "axios";
import Loading from '../tools/Loading';
import FormPlaylist from "../Content/FormPlaylist";
import NewContent from '../Content/NewContent';
import FormPlaylistModal from "./FormPlaylistModal";
import {FormVideoStyle} from "./FormVideoStyle"; 

const { Title } = Typography;
const { Meta } = Card;



class ContentFollowed extends Component {
    

    constructor(props) {
        super(props);
        console.log("PROPS DO CONTENT FOLLLOW", props);
        this.state = {
            content: [],
            toggler:false,
            
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
    
    changeTogglerState = () => {
       this.setState({
            toggler: !this.toggler,
        })
    }
    
    render() {

        if (!this.state.content || this.state.content.length === 0) {
             return <Loading />
                 
        } 
        
        return(  
        // <div>
            
            <div style={{ width: '85%', margin: '3rem auto' }}>
                <div className="btnFormDiv"><FormPlaylistModal theContent={this.state.content} getTheContent={this.getContentPlaylist} /></div>
                <div>
                    <Title level={2}> {this.state.content.name} </Title>
                    <hr />
                    {/* <FormPlaylist theContent={this.state.content} getTheContent={this.getContentPlaylist} /> */}
                    
                </div>
                
                <div style={{ position: 'relative', display: "flex", flexDirection: "row", flexWrap: "wrap", }}>
                {this.state.content.playlist.map((playlist, index) => {
                    return (
                        /* <Col key={index} span={8} lg={6} md={8} xs={24}> */
                            /* <div style={{ position: 'relative'}}> */
                                /* <a href={`/videos/${playlist._id}`}>
                                    <img style={{ width: '100%' }} alt='thumbnail' src={playlist.playlistImage} />
                                </a> */
                               <FormVideoStyle>
                                <iframe id="ytplayer" type="text/html" width="520" height="340"
                                    src={`https://www.youtube.com/embed/?listType=playlist&list=` + playlist.playlistUrl}
                                    frameBorder="0" allowFullScreen>   </iframe>
                          
                         
                                    {/* <FsLightbox 
                                        onCLick={() => this.changeTogglerState()}
                                        sources={`https://www.youtube.com/embed/?listType=playlist&list=` + playlist.playlistUrl}
                                    /> */}



                            {/* </div> */}
                                <br />
                                
                               
                            <Meta
                                avatar={
                                    <Avatar src={this.state.content.icon ? this.state.content.icon : "https://res.cloudinary.com/menozzi/image/upload/v1589934560/focus/undraw_youtube_tutorial_2gn3_z6dmf6.svg"} />
                                }
                                title={playlist.name}
                            />
                            </FormVideoStyle>
                           
                        /* </Col> */
                    );
                    })
                    
                }
                </div>
                {/* <NewContent style={{paddingLeft: "150px"}} getContentPlaylist={this.getContentPlaylist}/> */}
            </div>
              
          
         
            /* /* </div>
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
                </div> */ 
                /* /* <ThemeToggle/> */
                /* <div> */
            /* </div> */ 
           
        );
        
    }
            
}
        
export default ContentFollowed;
        
     
