import React, {Component} from 'react';

const API = 'AIzaSyBOpHq8VLNXxzi-VFjs_EAGS3Joxoi9Ndw'
const playlistId = 'PL_VhV5m_X3BK-j1rqyOG5j7FraqSEIxVw'
const result = 10; 
let  finalURL =`https://www.googleapis.com/youtube/v3/playlistItems?key=${API}&playlistId=${playlistId}&part=snippet&maxResults=${result}`

class YoutubeVideo extends Component {

    constructor(props) {
        super(props);
                
        this.state = {
            resultyt: []
        };
   
        this.clicked = this.clicked.bind(this)
           
    }
        
        
    clicked() {
    fetch(finalURL)
      .then((response) => response.json())
        .then((responseJson) => {
          console.log(responseJson)
            const resultyt = responseJson.items.map(obj => "https://www.youtube.com/embed/"+obj.snippet.resourceId.videoId)
            this.setState({ resultyt });
            // console.log(this.state.resultyt)
        })
        .catch((error) => {
            console.log(error);
        })
    }
    


    render() {
    
        // console.log("--->", finalURL)
        console.log(this.state.resultyt)
    
        return (
        
            <div>
                <button onClick={this.clicked}>Get Youtube videos</button>
                {
                        this.state.resultyt.map((link, i) => {
                            console.log(link);
                            let frame = <div key={i} className="youtube"><iframe  width="560" height="315" src={link} frameBorder="0" allowFullScreen></iframe></div>
                            
                            return frame;

                        })
                }
            </div>
        );
   

    }

}

export default YoutubeVideo;

