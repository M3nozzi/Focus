import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AuthService from '../components/auth/auth-service';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import styled from 'styled-components';
import ThemeToggle from "./WatchVideos/ChangeTheme/ThemeToggle";



const Wrapper = styled.header`
    position: sticky;
    top: 0;
    z-index: 100;
    background: #F97D7D;
    height: 3.75rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
`;

const NavigationItem = styled.a`
    display: flex;
    padding: 10px;
    flex-direction: row;
    color: #FFF;
    align-items: space-between;
    &:hover {
        cursor: pointer;
        color: #707070;
    }
`;

const IconNav = styled.img`
    margin-right: .5rem;
`;

const LinkNav = styled.span`
    color: white;
    font-size: 1.2rem;
    text-transform: uppercase;
    letter-spacing: +2px;
    font-weight: bold;
    
`;


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
         <Wrapper>
      
          <NavigationItem>
        
          <Typography style={{fontWeight: 700}} variant="h6" color="inherit">
              FOCUS
               </Typography>
             
          
                <LinkNav><Link to="/main">
                    <IconButton aria-label="Home" style={{marginTop: 0, marginLeft: 10, padding: 0}}>
                      <HomeIcon />
                    </IconButton>
                </Link></LinkNav>
            </NavigationItem>

            <NavigationItem>
            <div>
            <ThemeToggle/>
            </div>
            </NavigationItem>
                  <NavigationItem>
                  <Link to={"/profile/" + this.state.loggedInUser._id}>
                   {/* <Button>My Profile</Button> */}
                     <Avatar src={this.state.loggedInUser.path} />
                 </Link>
            
                   <Link to='/'>
                           <Button style={{color: "#FFF", fontWeight: 600}} onClick={() => this.logoutUser()}>Logout</Button>
                   </Link>
                   </NavigationItem>
               
              
       
         </Wrapper> 
      )
    } else {
      return (
        <Wrapper >

           <NavigationItem>
        
              <Typography variant="h6" color="inherit">
                FOCUS
              </Typography>
              </NavigationItem>

              <NavigationItem>
              <LinkNav>
                <Link style={{paddingLeft: "500px"}} to='/login' style={{color: "#FFF", textDecoration: 'none' }} variant="h6">Login</Link>
            </LinkNav>
            
            </NavigationItem>
         
          </Wrapper>
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