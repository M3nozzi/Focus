import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from "@material-ui/core/styles";
import Paper from '@material-ui/core/Paper'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction' 
import ListItemText from '@material-ui/core/ListItemText' 
import Avatar from '@material-ui/core/Avatar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import Edit from '@material-ui/icons/Edit'
import Divider from '@material-ui/core/Divider';

import DeleteProfile from './DeleteProfile'
// import AuthService from '../../auth/auth-service';

const classes = makeStyles(theme => ({
  root: theme.mixins.gutters({
    maxWidth: 600,
    margin: 'auto',
    padding: theme.spacing(3),
    marginTop: theme.spacing(5)
  }),
  title: {
    margin: `${theme.spacing(2)}px ${theme.spacing(1)}px 0`,
    color: theme.palette.protectedTitle,
    fontSize: '1em'
  },
  bigAvatar: {
    width: 100,
    height: 100,
    margin: 10
  }
}))

// const classes = useStyles();


class Profile extends Component {
  
  constructor(props) {
        super(props);
        console.log("User Profile", props);
        this.state = { 
          _id: this.props.loggedInUser._id,
          name: this.props.loggedInUser.name, 
          username:this.props.loggedInUser.username, 
          path: this.props.loggedInUser.path, 
          following: this.props.loggedInUser.following,
          // createdAt: this.props.loggedInUser.createdAt.slice(0,10).split("-").reverse().join("-")
        };
  }
 
  render() {
    return (

      <Paper className={classes.root} elevation={4}>
        <Typography variant="h6" className={classes.title}>
          Profile
        </Typography>
        <List dense>
          <ListItem>
            <ListItemAvatar>
              <Avatar src={this.state.path} className={classes.bigAvatar} />
            </ListItemAvatar>
            <ListItemText primary={this.state.name + " / " + this.state.username} />
            {
              <ListItemSecondaryAction>
                 
                  <Link to={"/profile/edit/" + this.state._id}>
                    <IconButton aria-label="Edit" color="primary">
                      <Edit />
                    </IconButton>
                  </Link>
                  <DeleteProfile userId={this.state._id} getUser={this.props.getUser} history={this.props.history}/>

                </ListItemSecondaryAction>
            }
          </ListItem>
          <Divider />
          {/* <ListItem>
            <ListItemText secondary={"Joined: " + this.state.createdAt} />
          </ListItem> */}
        </List>
      </Paper>
      /* <>
        <div>
          <Avatar size={64} icon={<UserOutlined />} />
          {this.state.path ? (<img src={this.props.path} alt={this.props.name} />) : (<img src="" alt={this.props.name} />)}
          <h1>{this.props.name}</h1>
          <h3>{this.props.username}</h3>
            
        </div>
      </> */
    )
  
  }


} 
    
export default Profile;

  //const auth = new AuthService();
  //const isLoggedIn = auth.loggedin();
  //   state = {
  //   name:"", username:"", path: "", following:""
  // }
        //this.handleFileChange=this.handleFileChange.bind(this)
    //}

    // handleFileChange(event) {

    //     const uploadData = new FormData();
    
    //     uploadData.append("imageUrl", event.target.files[0]);
       
    
    //     axios
    //       .post("http://localhost:5000/api/upload", uploadData)
    //       .then((response) =>
    //         this.setState({
    //           imagePath: response.data.secure_url,
    //         })
    //       )
    //       .catch((error) => console.log(error));

    // }



