import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Signup from './components/auth/Signup';
import Login from './components/auth/Login';
import Profile from './components/views/Profile/Profile';
import EditProfile from "./components/views/Profile/EditProfile";
import AuthService from './components/auth/auth-service';
import Navbar from "./components/Navbar";
import ProtectedRoute from './components/auth/protected-routes';
import ContentFollowed from './components/views/ContentFollowed';
import Main from "./components/Content/Main";
import NotFound from "./components/views/NotFound"
import Footer from './components/views/Footer';


class App extends Component {

  constructor(props) {
    super(props);

    this.state = { loggedInUser: null };
    this.service = new AuthService();

    this.getTheUser = this.getTheUser.bind(this);
  }



  fetchUser() {


    if (this.state.loggedInUser === null) {
     
      this.service
        .loggedin()
        .then((response) => {
         

          this.setState({
            loggedInUser: response,
          });
        })
        .catch((err) => {
          

          this.setState({
            loggedInUser: false,
          });
         // this.service.logout();
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
         <Navbar
           userInSession={this.state.loggedInUser}
           getUser={this.getTheUser} />
         <Switch>
           <ProtectedRoute
             exact path='/profile/:id'
             user={this.state.loggedInUser}
             getUser={this.getTheUser}
             component={Profile}
           />
           <ProtectedRoute
             exact path='/profile/edit/:id'
             user={this.state.loggedInUser}
             getUser={this.getTheUser}
             component={EditProfile}
           />
           <ProtectedRoute
             exact path='/main'
             user={this.state.loggedInUser}
             getUser={this.getTheUser}
             component={Main}
           />
           <ProtectedRoute
             exact path='/contents/:id'
             user={this.state.loggedInUser}
             getUser={this.getTheUser}
             component={ContentFollowed}
           />
           {/* <ProtectedRoute
                exact path='/videos/:id'
                user={this.state.loggedInUser}
                getUser={this.getTheUser}
                component={WatchX}
              /> */}
           {/* <ProtectedRoute exact path='/' user={this.state.loggedInUser}
                getUser={this.getTheUser}  component={Home} /> */}
          <Route component={NotFound} />
         </Switch>
         <Footer />
       </div>
     ); } else {
          return(
         <div className="App">
              
           <Navbar
             userInSession={this.state.loggedInUser}
             getUser={this.getTheUser} />
           <Switch>
             <Route exact path='/' component={Home} />
        
             <Route
               exact
               path='/signup'
               render={(props) => <Signup getUser={this.getTheUser} {...props} />}
             />

             <Route
               exact
               path='/login'
               render={(props) => <Login getUser={this.getTheUser} {...props} />}
             />

             <ProtectedRoute
               exact path='/profile/:id'
               user={this.state.loggedInUser}
               component={Profile}
             />
             <ProtectedRoute
               exact path='/profile/edit/:id'
               user={this.state.loggedInUser}
               component={EditProfile}
             />
             {/* <ProtectedRoute
               exact path='/main'
               user={this.state.loggedInUser}
               component={Main}
             /> */}
             <ProtectedRoute
               exact path='/contents/:id'
               user={this.state.loggedInUser}
               component={ContentFollowed}
             />
                   <Route component={NotFound} />
           </Switch>
           <Footer />
         </div>
      
     );
    }
      
   }
  }
  

export default App;

