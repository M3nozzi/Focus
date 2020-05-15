import React, { useState, Component} from 'react';
import SearchBar from './SearchBar';
import TestDetails from './TestDetails';
import VideoList from './VideoList';
import AxiosYoutube from "./AxiosYoutube";


export default function YoutubeConfig()  {
        

  const [ videos, setVideos ] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

                  
  return (
                
        <div>
            <SearchBar onSubmit={handleSubmit}/>
            <TestDetails video={selectedVideo} />
            <VideoList videos={videos} onVideoSelect={setSelectedVideo} />
          
          </div>
  );

    async function handleSubmit (searchTerm)  {
      console.log(searchTerm);
      const {
        data: {items: videos}
      } = await AxiosYoutube.get('search', {
          params: {
            part: 'snippet',
            maxResults: 5,
            //   key: process.env.REACT_APP_API_KEY,
            key:'AIzaSyBOpHq8VLNXxzi-VFjs_EAGS3Joxoi9Ndw',
            q: searchTerm
          }
        });

        setVideos(videos);
        setSelectedVideo(videos[0]);
    }
  
      // };
      // handleVideoSelect = (video) => {
      //   this.setState({selectedVideo:video})
      // }
  
}





