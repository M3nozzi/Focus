import React, { Component } from 'react';
import axios from 'axios';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


class DeleteProfile extends Component {
    
    constructor(props) {
        super(props);

        this.state = { 
            loggedInUser: this.props.getUser,
            open: false, 
        };

        this.deleteProfile = this.deleteProfile.bind(this);
        this.clickButton = this.clickButton.bind(this);
        this.handleRequestClose = this.handleRequestClose.bind(this);
    }   
    
    // deleteProfile() {
    //   this.service.deleteProfile(this.props.match.params._id)
    //   .then(() => {
    //     this.setState({ loggedInUser: null });
    //     this.props.getUser(null);  
    //     this.props.history.push('/');
    //   }).
    //   catch(error => console.log(error));
    // }

    deleteProfile() {
        console.log("propssss",this.props)
        axios
          .get("http://localhost:5000/api/profile-delete/" + this.props.getUser, {
            withCredentials: true,
          })
            .then(() => 
            {
            this.setState({ loggedInUser: null });
            this.props.getUser(null);  
            this.handleRequestClose();
            this.props.history.push("/signup")
            })
          .catch((error) => console.log(error));

      }
    clickButton () {
        
        this.setState({
            open:true,
        });
    }

    handleRequestClose (){
          
        this.setState({
            open: false,
          });
    }
    
    render() {
        return (
           <span>
                <IconButton aria-label="Delete" onClick={this.clickButton} color="secondary">
                    <DeleteIcon/>
                </IconButton>

                <Dialog open={this.state.open} onClose={this.handleRequestClose}>
                    <DialogTitle>{"Delete Account"}</DialogTitle>
                    <DialogContent>
                    <DialogContentText>
                        Confirm to delete your account.
                    </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                    <Button onClick={this.handleRequestClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={this.deleteProfile} color="secondary" autoFocus="autoFocus">
                        Confirm
                    </Button>
                    </DialogActions>
                </Dialog>
            </span>
        );
    }

}
  
export default DeleteProfile;