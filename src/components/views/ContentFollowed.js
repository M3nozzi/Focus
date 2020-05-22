import React, {Component} from 'react';
import { Card, Avatar, Col, Typography, Row } from 'antd';
import axios from "axios";
import Loading from '../tools/Loading';
import NewContent from '../Content/NewContent';
import FormPlaylistModal from "./FormPlaylistModal";
import {FormVideoStyle} from "./FormVideoStyle"; 

const { Title } = Typography;
const { Meta } = Card;



class ContentFollowed extends Component {
    

    constructor(props) {
        super(props);
        
        this.state = {
            content: [],
            toggler:false,
            
        }
        this.getContentPlaylist = this.getContentPlaylist.bind(this);

        
    }

    
    
    getContentPlaylist() {
        
        const { id } = this.props.match.params;
        axios.get(`${process.env.REACT_APP_API_URL}/contents/` + id, {
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
                                    
                </div>
                
                <div style={{ position: 'relative', display: "flex", flexDirection: "row", flexWrap: "wrap", }}>
                {this.state.content.playlist.map((playlist, index) => {
                    return (
                     
                               <FormVideoStyle>
                                <iframe id="ytplayer" type="text/html" width="520" height="340"
                                    src={`https://www.youtube.com/embed/?listType=playlist&list=` + playlist.playlistUrl}
                                    frameBorder="0" allowFullScreen>   </iframe>
                         
                                <br />    
                               
                            <Meta
                                avatar={
                                    <Avatar src={this.state.content.icon ? this.state.content.icon : "https://res.cloudinary.com/menozzi/image/upload/v1589934560/focus/undraw_youtube_tutorial_2gn3_z6dmf6.svg"} />
                                }
                                title={playlist.name}
                            />
                            </FormVideoStyle>
                           
                       
                    );
                    })
                    
                }
                </div>
          
            </div>
              
           
        );
        
    }
            
}
        
export default ContentFollowed;
        
     
