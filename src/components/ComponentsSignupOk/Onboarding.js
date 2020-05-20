import React, { Component } from 'react';
import Onboarding1 from './Onboarding1';
import Onboarding2 from './Onboarding2';



export class Onboarding extends Component {

    state = {
        step: 1,
      
    }

    //proceed to next step
    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1
        });
    }

     //go back to prev step
    //  prevStep = () => {
    //     const { step } = this.state;
    //     this.setState({
    //         step: step - 1
    //     });
    //  }
    
    // handleChange = input => e => {
    //     this.setState({[input]: e.target.value})
    // }

    render() {
        const { step } = this.state;
  
        switch (step){
            case 1:
                return (
                    <Onboarding1
                        nextStep={this.nextStep}
                        // handleChange={this.handleChange}
                     
                    />
                )
            case 2:
                return (<Onboarding2
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    // handleChange={this.handleChange}
                    />)
            
              }
    
    }
}

export default Onboarding;
