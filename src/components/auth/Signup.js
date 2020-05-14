import React, { Component } from 'react';
import AuthService from './auth-service';
import { Link } from 'react-router-dom';
import GoogleAuth from './GoogleAuth';

class Signup extends  Component{

    constructor(props){
        super(props);

        this.state = {
            email:"",
            password:"",
            name: "",
            errorMsgUsername: null,
            errorMsgPassword: null,
        }

        this.service = new AuthService();
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);

    }


    handleFormSubmit(event) {
        event.preventDefault();
        const email = this.state.email;
        const password = this.state.password;
        const name = this.state.name;

        this.service
          .signup(email, password, name)
          .then((response) => {
            this.setState({
              email: "",
              password: "",
              name: "",
              errorMsgUsername: null,
              errorMsgPassword: null,
            });
            console.log(response);
            this.props.getUser(response);
            this.props.history.push("/profile");
          })
          .catch((error) => {
            console.log(error)
            const { message } = error.response.data;  
            message.includes("password")
              ? this.setState({
                  errorMsgPassword: message,
                })
              : this.setState({
                  errorMsgUsername: message,
                });
            console.log(message);
          });
    }


    handleChange(event) {
        const { name, value } = event.target;
        this.setState({ [name]: value });
      }

    render() {
        return(
            <div>
            <div className="social-container">
            <GoogleAuth />
                </div>
                <p>or</p>
                <form onSubmit={this.handleFormSubmit}>
                <div className="field">
                    <label className="label">Email</label>
                    <div className="control">
                    <input 
                        className="input" 
                        type="text" 
                        name="email"
                        value={this.state.email} 
                        placeholder="jon.snow@got.com" 
                        onChange={this.handleChange}
                        />
                    </div>
                </div>

                <div className="field">
                    <label className="label">Password</label>
                    <div className="control">
                    <input 
                        className="input" 
                        type="password" 
                        name="password"
                        value={this.state.password}  
                        placeholder="*****" 
                        onChange={this.handleChange}
                        />
                    </div>
                </div>

                <div className="field">
                    <label className="label">Name</label>
                    <div className="control">
                    <input 
                        className="input" 
                        type="text" 
                        name="name"
                        value={this.state.name}
                        placeholder="Jon Snow" 
                        onChange={this.handleChange}
                        />
                    </div>
                </div>

                <input className="button" type="submit" value="Create the Account" />
            </form>
            <p>
                Already have account?
                <Link to={"/login"}> Login</Link>
                <br/>
                 Go Back
                <Link to={"/"}> Home</Link>
            </p>
            </div>
        );
    }
}

export default Signup;