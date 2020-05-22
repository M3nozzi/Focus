import React, { Component } from 'react';
import Onboarding1 from './Onboarding1';
import Onboarding2 from './Onboarding2';



export class Onboarding extends Component {

    state = {
        step: 1,
      
    }

  
    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1
        });
    }

 
    render() {
        const { step } = this.state;
  
        switch (step){
            case 1:
                return (
                    <Onboarding1
                        nextStep={this.nextStep}
                 
                     
                    />
                )
            case 2:
                return (<Onboarding2
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                 />)
            
              }
    
    }
}

export default Onboarding;
