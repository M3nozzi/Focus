import React, { Component } from 'react';
// import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
// import TextField from '@material-ui/core/TextField';
// import Button from '@material-ui/core/Button';
import Button from "../styles/Button";
// import AuthService from './auth-service';
import { Link } from 'react-router-dom';
import GoogleAuth from '../auth/GoogleAuth';

 class FormUserDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }


    render() {
        const { values, handleChange } = this.props;
        return (
          <>
            <div className="social-container">
            <GoogleAuth />
                </div>
                <p>or</p>
                <br />
                <p>Sign up with your email address</p>
                <form onSubmit={this.handleFormSubmit}>
                <div className="field">
                    <div className="control">
                    <input 
                        className="input" 
                        type="text" 
                        name="email" 
                        placeholder="e-mail"
                        onChange={handleChange('username')}
                        defaultValue={values.username}    
                        
                    />
                    </div>
                </div>

                <div className="field">
                    <div className="control">
                    <input 
                        className="input" 
                        type="text" 
                        name="password" 
                        placeholder="password"
                        onChange={handleChange('password')}
                        defaultValue={values.password}     
                    />
                    </div>
                </div>

                <div className="field">
                    <div className="control">
                    <input 
                        className="input" 
                        type="text" 
                        name="name" 
                        placeholder="What should we call you?"
                        onChange={handleChange('name')}
                        defaultValue={values.name}    
                    />
                    </div>
                </div>
                <Button primary={true}
                         onClick={this.continue} />
                {/* <Button primary>SIGN UP</Button> */}
            </form>
            <p>
                Already have account?
                <Link to={"/login"}> Login</Link>
                <br/>
                 Go Back
                <Link to={"/"}> Home</Link>
            </p>
            </>
        )
        }
 }
export default FormUserDetails;
                {/* <React.Fragment>
                    <TextField
                        hintText="E-mail"
                        floatingLabelText="email"
                        onChange={handleChange('username')}
                        defaultValue={values.username}
                    />
                    <br />
                    <TextField
                        hintText="Password"
                        floatingLabelText="password"
                        onChange={handleChange('password')}
                        defaultValue={values.password}
                    />
                    <br />
                    <TextField
                        hintText="Name"
                        floatingLabelText="name"
                        onChange={handleChange('name')}
                        defaultValue={values.name}
                    />
                    <br />
                    <Button variant="contained" label="Continue" primary={true}
                        style={styles.button} onClick={this.continue} />
                    
                </React.Fragment> */}
        
           


{/* const styles = {
    button: {
        margin: 15
    }
} */}

{/* export default FormUserDetails; */}



                    