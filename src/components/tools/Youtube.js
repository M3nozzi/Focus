// import React from 'react';
// import YouTube from 'react-youtube';
 
// class ReactYoutube extends React.Component {
    
//     videoOnReady(event) {
//         // access to player in all event handlers via event.target
//         event.target.pauseVideo();
//         console.log(event.target);
//     }
  
//     render() {
    
//       const opts = {
//       height: '390',
//       width: '640',
//       playerVars: {
//         // https://developers.google.com/youtube/player_parameters
//         autoplay: 1,
//       },
//     };
 
//     const {videoId} = this.props;

//     return (<YouTube videoId={videoId} opts={opts} videoOnReady={this.videoOnReady} />
//     );
//   }
 
 
// }

// export default ReactYoutube;

// import React from "react";
// import { Link } from "react-router-dom";
// import styled from "styled-components";
// import Theme from "../../Theme";

// import Button from "../styles/Button";
// import { Loading } from "./Loading";

// export const BoxGrid = styled.ul`
//     display: flex;
//     flex-wrap: wrap;
//     flex-flow: wrap-reverse;
//     padding: 1rem;
// `;

// const Container = styled(Link)`
//     max-width: 100%;
//     flex: 1 0 280px;
//     border-radius: ${props => Theme.baseRadius};
//     margin: ${props => Theme.baseRadius};
//     position: relative;
// `;

// const Details = styled.div`
//     padding: 0.5rem; 
//     flex: 0;
//     justify-content: space-between;
//     align-items: center;
//     display: flex;
// `;

// const Title = styled.span`
//     font-weight: bold;
// `;

// const Action = styled(Button)`
//     flex: 0;
// `;

// const Thumbnail = styled.img`
//     width: 100%;
//     border-radius: ${props => Theme.baseRadius};
//     border: ${props => `1px solid ${Theme.primary}33`};
// `;

// export function YoutubeThumbnail({id, thumbnail, title}) {
//     return (
//         <Container tabIndex="0" to={`/watch/${id}`}>
//             <Thumbnail src={thumbnail.url} />
//             <Details>
//                 <Title>{title}</Title>
//                 <Action inverted>WATCH</Action>
//             </Details>
//         </Container>
//     )
// }

// export function YoutubeGallery({videos}) {
//     const hasVideos = videos && videos.length;
    
//     return hasVideos ? videos.map(video => (
//         <YoutubeThumbnail
//             id={video.id.videoId}
//             thumbnail={video.snippet.thumbnails.medium}
//             title={video.snippet.channelTitle}
//         />
//     )) : <Loading wide/>
// }

// function getEmbedURL(channelId) {
//     return `https://www.youtube.com/embed/${channelId}`;
// }

// export const VideoFrame = styled.iframe.attrs(({id}) => ({
//     width: 560,
//     height: 349,
//     frameborder: "0",
//     allowFullScreen: true,
//     src: getEmbedURL(id)
// }))`
//     border-radius: ${props => Theme.baseRadius};
//     border: ${props => `1px solid ${Theme.primary}33`};
// `;
