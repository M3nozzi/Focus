import React, {Component} from 'react';
import { Card, Avatar, Col, Typography, Row } from 'antd';
import axios from "axios";
const { Title } = Typography;
const { Meta } = Card;


class ContentFollowed extends Component {
    

    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            content: [],
        }
        this.getContentPlaylist = this.getContentPlaylist.bind(this);
        
    }

    
    getContentPlaylist() {
        
        let id = this.props.match.params.id;
        axios.get(`http://localhost:5000/api/contents/` + id, {
            withCredentials:true,
            })
            .then(response => {

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
        
        return(  
            <div style={{ width: '85%', margin: '3rem auto' }}>
                <Title level={2}> {this.state.content.name} </Title>
                <hr />
                <Row gutter={16}>
            
                {this.state.content.playlist.map((playlist, index) => {
                    return (
                        <Col key={index} lg={6} md={8} xs={24}>
                            <div style={{ position: 'relative' }}>
                                <a href={`/videos/${playlist._id}`}>
                                    <img style={{ width: '100%' }} alt='thumbnail' src={playlist.playlistImage} />
                                </a>
                            </div><br />
                            <Meta
                                avatar={
                                    <Avatar src={this.state.content.icon ? this.state.content.icon : "https://res.cloudinary.com/menozzi/image/upload/v1589837435/focus/computer_device_electronic_entertainment_imac_mobile-1320191161433469763_vkp1jf.png"} />
                                }
                                title={playlist.name}
                            />
                            <span>{playlist.name}</span> <br />
                        </Col>
                    );
                    })};
                }
            
                </Row>
            </div>  
        );
    }
            
}
        
export default ContentFollowed;
        
     
