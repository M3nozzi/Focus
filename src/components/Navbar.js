import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AuthService from '../components/auth/auth-service';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import HomeIcon from '@material-ui/icons/Home'
import Button from '@material-ui/core/Button'

const styles = theme => ({
  root: {
    color: '#F97D7D',
    
  }
})

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
        <AppBar color={styles.root} position="static">
            <Toolbar>
        
              <Typography variant="h6" color="inherit">
                FOCUS
              </Typography>
                <span>
                <Link to="/"><IconButton aria-label="Home">
                    <HomeIcon/>
                </IconButton></Link>
                <Link to={"/profile/" + this.state.loggedInUser._id}>
                  <Button>My Profile</Button>
                </Link>
                <Link to='/'>
                        <button onClick={() => this.logoutUser()}>Logout</button>
                  </Link>
              </span>

          </Toolbar>
        </AppBar>
      )
    } else {
      return (
          <AppBar position="static">
            <Toolbar>
              <div>
                <nav className="nav-style">
                  <p className="focusNavbar">FOCUS</p>
                    <Link className="login" to='/login' style={{ textDecoration: 'none' }}>Login</Link>
                </nav>
              </div>
            </Toolbar>
          </AppBar>
      )
    }
  }
  
}

export default Navbar;

{/* <nav className="nav-style">
          <ul>
             <li>Welcome, {this.state.loggedInUser.name}</li>
             <li>
               <Link to='/profile' style={{ textDecoration: 'none' }}>PROFILE</Link>
             </li>
             <li>
               <Link to='/'>
                     <button onClick={() => this.logoutUser()}>Logout</button>
               </Link>
             </li>
           </ul>
         </nav> */}