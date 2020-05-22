import React from 'react';
import '../../App.css';


const VideoItem = ({ video, onVideoSelect }) => {
    return(
        <div onClick={() => onVideoSelect(video)} className='video-item item'>
            <img className='ui image' src={video.snippet.thumbnails.medium.url} alt='thumbnail' />
            
            <div ClassName='content'>
                <div className='header'>{video.snippet.title}</div>
                </div>
        </div>
    )
};

export default VideoItem;