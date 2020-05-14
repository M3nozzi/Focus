import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AuthService from '../components/auth/auth-service';



class Navbar extends Component {
  constructor(props){
    super(props);
      this.state = { loggedInUser: null };
      this.service = new AuthService();
  }
  componentDidUpdate(prevProps) {
    if (this.props.userInSession !== prevProps.userInSession) {
      this.setState({loggedInUser: this.props.userInSession});
    }
  }
    
  logoutUser() {
    this.service.logout()
    .then(() => {
      this.setState({ loggedInUser: null });
      this.props.getUser(null);  
    })
  }
    
  render(){
    if(this.state.loggedInUser){
      return(
        <nav className="nav-style">
          <ul>
            <li>Welcome, {this.state.loggedInUser.name}</li>
            <li>
              <Link to='/projects' style={{ textDecoration: 'none' }}>Projects</Link>
            </li>
            <li>
              <Link to='/'>
                    <button onClick={() => this.logoutUser()}>Logout</button>
              </Link>
            </li>
          </ul>
        </nav>
      )
    } else {
      return (
        <div>
              <nav className="nav-style">
           
                <ul>
                    <li><Link to='/login' style={{ textDecoration: 'none' }}>Login</Link></li>
    
                </ul>
            
        </nav>
        </div>
      )
    }
    }
  
}

export default Navbar;
