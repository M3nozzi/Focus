//request('dotenv').config();
import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Signup from './components/auth/Signup';
import Login from './components/auth/Login';
import Profile from './components/Profile';
import AuthService from './components/auth/auth-service';
import Navbar from "./components/Navbar";
import ProtectedRoute from './components/auth/protected-routes';
import queryString from 'query-string';
import LandingPage from './components/views/LandingPage';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { loggedInUser: null };
    this.service = new AuthService(); 
    this.getTheUser = this.getTheUser.bind(this);
  }

    componentDidMount() {
        console.log("----->", this.props);
    let query = queryString.parse(this.props.location.search);
    if (query.token) {
      window.localStorage.setItem("jwt", query.token);
      this.props.history.push("/");
   }
  }


  fetchUser() {
    // console.log("inside fetchUser");
    if (this.state.loggedInUser === null) {
      // console.log("NULL inside fetchUser");
      this.service
        .loggedin()
        .then((response) => {
          // console.log("SUCCESS inside fetchUser");

          this.setState({
            loggedInUser: response,
          });
        })
        .catch((err) => {
          // console.log("ERROR inside fetchUser");

          this.setState({
            loggedInUser: false,
          });
        });
    }
  }

  getTheUser(userObj) {
    this.setState({
      loggedInUser: userObj,
    });
  } 

  render() {
    this.fetchUser();
    if(this.state.loggedInUser){
      
      return (
        <div className="App">
          <Navbar userInSession={this.state.loggedInUser} getUser={this.getTheUser}/>
          <Switch>
            <Route exact path='/' component={Home}/>
            
            <Route 
              exact 
              path='/signup'  
              render={(props) => <Signup getUser={this.getTheUser} {...props} /> }

              />
            
            <Route 
              exact 
              path='/login' 
              render={(props) => <Login getUser={this.getTheUser} {...props} /> } 
              /> 

            <ProtectedRoute 
              exact 
              path='/profile' 
              render={(props) => 
                  <Profile getUser={this.getTheUser} {...props}/>} 
              />
            </Switch>
        </div>
      );
    } else {
      return (
        <div className="App">

          <Navbar userInSession={this.state.loggedInUser} getUser={this.getTheUser} />
          <Switch>
            {/* <Route exact path='/' component={Home} /> */}
            <Route exact path='/' component={LandingPage} />
            <Route 
              exact  
              path='/signup' 
              render={(props) => <Signup getUser={this.getTheUser} {...props} />} />

            <Route 
              exact 
              path='/login' 
              render={(props) => <Login getUser={this.getTheUser} {...props} />} 
              />
            <Route exact path='/profile' render={(props) => (
              <Profile getUser={this.getTheUser} {...props} />)} />
          </Switch>
        </div>
      );
    }
  }
}
export default App;


//const dotenv = request('dotenv');
// import React from "react";
// import ReactDOM from "react-dom";
// import { BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";

// import { Loading } from "./components/tools/Loading";

// import LoginTest from "./components/LoginTest";
// import Home from "./components/Home";
// import Watch from "./components/Watch";
// import { gapi } from 'gapi-script';


// //const YOUTUBE_DISCOVERY_URI = "https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest";

// function App() {
//     const isSignedIn = gapi.auth2.getAuthInstance().isSignedIn.get();

//     return isSignedIn ? (
//         <Router>
//             <Switch>
//                 <Route path="/watch/:id" component={Watch} />
//                 <Route path="/watch" component={Home} />
//                 <Redirect from="/" to="/watch" />
//             </Switch>
//         </Router>
//     ) : <LoginTest />;
// }

// function AppContainer() {
//     const wasGoogleReady = !!gapi.auth2;
//     const [isGoogleReady, setGoogleReady] = React.useState(wasGoogleReady);

//     React.useEffect(() =>{
//         gapi.load('client:auth2', () => {
//             const authPromise = gapi.auth2.init({
//                 clientId: CLIENT_ID,
//             });
            
//             gapi.client.setApiKey(API_KEY);
//             const youtubePromise = gapi.client.load();
            
//             Promise.all([authPromise, youtubePromise]).then(() => setGoogleReady(true));
//         })
//     }, [isGoogleReady]);
    
//     return isGoogleReady ? <App /> : <Loading />;
// }


// ReactDOM.render(<AppContainer />, document.getElementById("root"));

// export default AppContainer;