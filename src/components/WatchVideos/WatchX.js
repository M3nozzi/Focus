import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Video = styled.div`
margin: 3rem auto;
display: grid;
grid-template-columns: repeat(auto-fit, minmax(15.625rem, 1fr));
grid-gap: 1.5rem;
@media screen and (min-width: 768px) {
    margin: 2rem auto;
    grid-gap: 2rem;
}
`;


const API = process.env.REACT_APP_API_KEY
const playlistId = "PLHz_AreHm4dkqe2aR0tQK74m8SFe-aGsY";
const result = 2; 
let  finalURL =`https://www.googleapis.com/youtube/v3/playlistItems?key=${API}&playlistId=${playlistId}&part=snippet&maxResults=${result}`

class WatchX extends Component {
    constructor(props) {
        super(props)

        this.state = {
   
            playlist:[],
      
        };
        
        this.getAllVideos = this.getAllVideos.bind(this);
    }
       
    getAllVideos() {
        
        const lookingForPLaylist = '/videos/' + playlistId;

        axios
            .get(`http://localhost:5000/api` + lookingForPLaylist )
            .then(response => {
               
                this.setState({
                    playlist: response.data,
                })
            })
    }

    componentDidMount() {
        this.getAllVideos();
    }

   
  
        render(){
            return (
            
                <div>
                 
               {
                        this.state.playlist.map((link, i) => {
                            console.log(link);
                            const videoUrl = "https://www.youtube.com/embed/" + link.videoUrl;
                            let frame = <div key={i} className="youtube"> <Video><iframe  width="560" height="315" src={videoUrl} frameBorder="0" allowFullScreen></iframe></Video></div>
                            
                            return frame;

                        })
                }
            </div>
          
        )
    }
}

export default WatchX;




// export class WatchX extends Component {
//     constructor(props) {
//         super(props);
                
//         this.state = {
//             resultyt: []
//         };
   
//         this.clicked = this.clicked.bind(this)
           
//     }
   
//         handleFormSubmit() {
//         fetch(finalURL)
//           .then((response) => response.json())
//             .then((responseJson) => {
//               console.log(responseJson)
//                 const resultyt = responseJson.items.map(obj => "https://www.youtube.com/embed/"+obj.snippet.resourceId.videoId)
//                 this.setState({ resultyt });
//                 // console.log(this.state.resultyt)
//             })
//             .catch((error) => {
//                 console.log(error);
//             })
//         }

//     render() {
//         return (
//             <div>
//                 <button onClick={this.clicked}>Get Youtube videos</button>
//                 {
//                         this.state.resultyt.map((link, i) => {
//                             console.log(link);
//                             let frame = <div key={i} className="youtube"><iframe  width="560" height="315" src={link} frameBorder="0" allowFullScreen></iframe></div>
                            
//                             return frame;

//                         })
//                 }
//             </div>
//         )
//     }
// }