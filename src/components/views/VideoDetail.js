import React, {useEffect, useState}  from 'react';
import { List, Avatar, Row, Col } from 'antd';
import axios from 'axios';
import Loading from "../tools/Loading";
import SideVideo from "./SideVideo";
import Followers from './Followers';

function VideoDetail(props) {
    
    const videoId = props.match.params.videoId;
    const [ Video, setVideo] = useState([]);

    const videoVariable = { videoId: videoId};

    useEffect(() => {
        axios.post('/api/video/getVideo', videoVariable)
            .then(response => {
                if(response.data.success) {
                   
                    setVideo(response.data.video);
                } 
                else{
                    alert('Failed to get video Info');
                }  
                
            })
    }, []);

if(Video.content){
    return (
        <Row>
            <Col lg={18} xs={24}>
        <div className="postPage" style={{ width: '100%', padding: '3rem 4em' }}>
            <video style={{ width: '100%' }} src={`${process.env.REACT_APP_API_URL}/${Video.filePath}`} controls></video>

                    <List.Item actions={[<Followers userTo={Video.owner._id} contentFrom={Video.Content._id} userFrom={localStorage.getItem('userId')} />]}>
                <List.Item.Meta
                    avatar={<Avatar src={Video.writer && Video.writer.image} />}
                    title={<a href="https://ant.design">{Video.title}</a>}
                    description={Video.description}
                />
                <div></div>
            </List.Item>

                </div>
            </Col>
            <Col lg={6} xs={24}>
                <SideVideo/>
            </Col>
            </Row>
    );
} else {
    return (
        <Loading/>
    )
}

}
export default VideoDetail;


