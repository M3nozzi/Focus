import React, { Component } from "react";
import AuthService from "./auth-service";
import { Link } from "react-router-dom";
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

class Login extends Component{

    constructor(props) {
        super(props);
    
        this.state = {
            username: "",
            password: "",
  
            errorMsgUsername: null,
            errorMsgPassword: null,
        };
        this.service = new AuthService();
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

   
  handleFormSubmit(event) {
    event.preventDefault();
    const username = this.state.username;
    const password = this.state.password;

    this.service
      .login(username, password)
      .then((response) => {
        let redirectTo = "/profile";

        this.setState({
          username: "",
          password: "",
          errorMsgUsername: null,
          errorMsgPassword: null,
        });

        this.props.getUser(response);
       
        if (this.props.location.state) {
          redirectTo = this.props.location.state.from.pathname;
        }
        this.props.history.push(redirectTo + "/" + response._id); //+ response._id
      })
      .catch((error) => {
        const { message } = error.response.data;

        message.endsWith("password.")
          ? this.setState({
              errorMsgPassword: message,
            })
          : this.setState({
              errorMsgUsername: message,
            });
        console.log(error.response, message);
      });
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
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
          <CardHeading>Login</CardHeading>
        </CardHeader>

                    <CardBody>

                        <CardFieldset>
                        <div className="field">
                    <CardInput   
                        type="text"
                        name="username"
                        placeholder="e-mail"
                        value={this.state.username}
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
         
                {/* <CardIcon className="fa fa-eye" eye small /> */}
                        {errorMsgPassword && (
                       <p className="help is-danger">{this.state.errorMsgPassword}</p>
            )}
        </div>
         </CardFieldset>
                    
                            
          <CardFieldset>
            <CardOptionsNote>Or Login with</CardOptionsNote>

            <CardOptions>
              <CardOptionsItem>
                <CardIcon className="fab fa-google" big />
              </CardOptionsItem>

              {/* <CardOptionsItem>
                <CardIcon className="fab fa-twitter" big />
              </CardOptionsItem>

              <CardOptionsItem>
                <CardIcon className="fab fa-facebook" big />
              </CardOptionsItem> */}
            </CardOptions>
          </CardFieldset>

          <CardFieldset>
            <CardButton type="button" onClick={this.handleFormSubmit}>Login</CardButton>
          </CardFieldset>

          <CardFieldset>
            <CardLink>Don't have an account? <Link to={"/signup"} className="LinkLoginSignup">Sign up</Link></CardLink>
          </CardFieldset>
        </CardBody>
      </CardWrapper>
    </div>

      // <div className="section">
      //   <form onSubmit={this.handleFormSubmit}>
      //     <div className="field">
      //       <div className="control">
           

      //         <input
      //           className="input" 
      //           type="text"
      //           name="username"
      //           placeholder="e-mail"
      //           value={this.state.username}
      //           onChange={this.handleChange}
      //         />
      //       </div>
      //       {errorMsgUsername && (
      //         <p className="help is-danger">{this.state.errorMsgUsername}</p>
      //       )}
      //     </div>
      //     <div className="field">
      //       <div className="control">
            
      //         <input
      //           className="input" 
      //           type="password"
      //           name="password"
      //           placeholder="Password"
      //           value={this.state.password}
      //           onChange={this.handleChange}
      //         />
      //       </div>
      //       {errorMsgPassword && (
      //         <p className="help is-danger">{this.state.errorMsgPassword}</p>
      //       )}
      //     </div>
    
      //     <button className="btnLogin" primary>LOGIN</button>
      //   </form>
      //   <p>
      //     Don't have an account?
      //     <Link to={"/signup"}> Signup</Link>
      //   </p>
      // </div>
    );
  }
}

export default Login;