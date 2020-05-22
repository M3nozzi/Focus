import React, { Component } from 'react';
import AuthService from './auth-service';
import { Link } from 'react-router-dom';
import ReactDOM from "react-dom";
import {
  CardWrapper,
  CardHeader,
  CardHeading,
  CardBody,
  CardIcon,
  CardFieldset,
  CardInput,
  CardOptionsItem,
  CardOptions,
  CardOptionsNote,
  CardButton,
  CardLink
} from "./SignupStyle"; 
import googleIcon from "../../images/error/google.png"


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
        this.responseGoogle = this.responseGoogle.bind(this);
     

    }


    handleFormSubmit(event) {
        event.preventDefault();
        const username = this.state.email;
        const password = this.state.password;
        const name = this.state.name;

        this.service
          .signup(username, password, name)
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
            this.props.history.push(`/profile/${response._id}`);
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

      responseGoogle(response) {
        this.service
          .googleLogin()
          .then((resp) => console.log("Response Google:", resp))
          .catch((err) => console.log(err));
        console.log("response google:", response);
      }
     render() {

        const { errorMsgUsername, errorMsgPassword } = this.state;

        const inputClassName = "input is-small";

        const classNameUsername = errorMsgUsername
            ? `${inputClassName} is-danger`
            : inputClassName;
        const classNamePassword = errorMsgPassword
            ? `${inputClassName} is-danger`
            : inputClassName;
        
        return (
            <div className="App">
      <CardWrapper>
        <CardHeader>
          <CardHeading>Sign in</CardHeading>
        </CardHeader>

                    <CardBody>

                        <CardFieldset>
                        <div className="field">
                    <CardInput  type="text" 
                        name="email"
                        value={this.state.email} 
                        placeholder="E-mail" 
                        onChange={this.handleChange} required />
                                
                        {errorMsgUsername && (
                        <p className="help is-danger">{this.state.errorMsgUsername}</p>
                    )}
                </div>
             </CardFieldset>
           
                        
        
                        <CardFieldset>
                        <div className="field">
            <CardInput type="password" 
                        name="password"
                        value={this.state.password}  
                        placeholder="Password" 
                        onChange={this.handleChange} required />
         
                        {errorMsgPassword && (
                       <p className="help is-danger">{this.state.errorMsgPassword}</p>
            )}
        </div>
         </CardFieldset>
           
                            
          
                        <CardFieldset>
                        <div className="field">
            <CardInput ptype="text" 
                        name="name"
                        value={this.state.name}
                        placeholder="What should we call you?" 
                                    onChange={this.handleChange} required />
                      </div> 
            </CardFieldset>
              
                            
          <CardFieldset>
            <CardOptionsNote>Or sign up with</CardOptionsNote>

            <CardOptions>
              <CardOptionsItem>
            <a className='socialLogin' href={`${process.env.REACT_APP_API_URL}/auth/google`}><img className="socialLogin" src={googleIcon} alt="google" /></a>
              </CardOptionsItem>
            </CardOptions>
          </CardFieldset>

          <CardFieldset>
            <CardButton type="button" onClick={this.handleFormSubmit}>Sign Up</CardButton>
          </CardFieldset>

          <CardFieldset>
            <CardLink><Link to={"/login"} className="LinkLoginSignup">I already have an account</Link></CardLink>
          </CardFieldset>
        </CardBody>
                </CardWrapper>
                
    </div>
        )

    }
}

export default Signup;