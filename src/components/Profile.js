import React, { Component } from 'react';
// import AuthService from './auth/auth-service';
// import { Link } from 'react-router-dom';
import axios from "axios";

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = { username: "", campus: "", course: "", imagePath: "" };
        this.handleFileChange=this.handleFileChange.bind(this)
    }

    handleFileChange(event) {

        const uploadData = new FormData();
    
        uploadData.append("imageUrl", event.target.files[0]);
       
    
        axios
          .post("http://localhost:5000/api/upload", uploadData)
          .then((response) =>
            this.setState({
              imagePath: response.data.secure_url,
            })
          )
          .catch((error) => console.log(error));

    }

    render() {
        return (
            <>
            <div>
              <h1>Profile</h1>
             
            </div>
          </>
        )
    }

}
export default Profile;