import React, { Component } from 'react';
import FormUserDetails from './FormUserDetails';
import FormPersonalDetails from './FormPersonalDetails';
import Confirm from './Confirm';
export class UserForm extends Component {

    state = {
        step: 1,
        username: '',
        password: '',
        name:'',
    }

    //proceed to next step
    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1
        });
    }

     //go back to prev step
     prevStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        });
     }
    
    //handle fields change
    handleChange = input => e => {
        this.setState({[input]: e.target.value})
    }

    render() {
        const { step } = this.state;
        const { username, password, name } = this.state;
        const values = { username, password, name };
        switch (step){
            case 1:
                return (
                    <FormUserDetails
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )
            case 2:
                return (<FormPersonalDetails
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    handleChange={this.handleChange}
                    values={values}
                />)
            
            case 3:
                return (<Confirm
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    values={values}
                />)
            
            case 4:
                return <h1>Success</h1>
        }
    
    }
}

export default UserForm;
