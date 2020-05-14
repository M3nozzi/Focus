import React, {Component} from 'react';
import { Link } from 'react-router-dom';
// import { Card, Divider, Icon } from './styles/Card';
import { Container } from './styles/Containers';
import LoginCard from './styles/LoginCard';
// import ReactYoutube from './tools/Youtube';
import { YoutubeGallery, BoxGrid } from './tools/Youtube';



class Home extends Component {
    constructor(props) {
        super(props);

    }

    render(){
        return (
          <Container>
            <LoginCard />
            {/* <ReactYoutube videoId="_nBlN9yp9R8" /> */}
          </Container>
        );
    }
}

 export default Home;

// import React from "react";
// import { gapi } from 'gapi-script';
// import { Header } from "./Header";
// import { BoxGrid, YoutubeGallery } from "./tools/Youtube";

// export default function() {
//     const [videos, setVideos] = React.useState([]);

//     React.useEffect(() => {
//         let isSubscribed = true;

//         // Load videos from Youtube API
//         loadVideos().then(videos => {
//             if (isSubscribed) setVideos(videos);
//         });

//         return () => isSubscribed = false;
//         // isSubscribed maneuver lets us cancel the promise
//         // if the component unmounts before the results come in
//     }, []);

//     return (
//         <div>
//             <Header />
//             <BoxGrid>
//                 <YoutubeGallery videos={videos} />
//             </BoxGrid>
//         </div>
//     );
// }

// function loadVideos() {
//     return new Promise((resolve, reject) => {
//         gapi.client.youtube.search.list({
//             "part": "snippet",
//             "eventType": "live",
//             "maxResults": 12,
//             "q": "game",
//             "type": "video"
//         }).then(response => {
//             const items = response.result.items;

//             if(items) {
//                 resolve(items);
//             } else {
//                 reject();
//             }
//         }).catch(error => {
//             reject();
//         });
//     });
// }




/* <div className="hero is-medium has-bg-img">
  <div className="hero-body">
    <div className="container">
      <h1 className="title">
        Focus
      </h1>
      <h2 className="subtitle">
        Test
      </h2>
    </div>
    <div>
      <Container>
        <div className="is-grouped">
          <Link
            className="button is-primary"
            to={
              "/signup"
            }
          >
            Sign up
          </Link>
          <br />
          <br />
          <Link
            to={
              "/login"
            }
            className="button is-primary"
          >
            Log in
          </Link>
        </div>
      </Container>
    </div>
  </div>
</div>; */