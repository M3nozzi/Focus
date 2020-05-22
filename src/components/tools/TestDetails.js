import React from 'react';
import Loading from './Loading';



const TestDetails = ({ video }) => {
    if (!video) {
        return <Loading/>;
    }

    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

    console.log(typeof (video));

    return (
        <div>
            <div className='ui embed'>
                <iframe frameBorder='0' height='50%' width='50%' src={videoSrc} allowFullScreen title='Video player' />
            </div>
            <div className='ui segment'>
                <h4 className='ui header'>{video.snippet.title} - {video.snippet.channelTitle}</h4>
                <p>{video.snippet.description}</p>
            </div>
        </div>

    )
}

export default TestDetails;