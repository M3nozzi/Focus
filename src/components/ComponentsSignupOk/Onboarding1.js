import React, { Component } from 'react';
import styled from 'styled-components';
import organizeIcon from '../../images/Onboarding/Officeworker.svg';
import {CardWrapper, CardButton} from "../auth/SignupStyle"; 


const Wrapper = styled.div`
    
    text-decoration: none;
    color: #707070;
    margin-top:15px;
    font-family: 'Roboto';
    font-weight:700;


    p {
        font-weight:400;
    }

`;

 class Onboarding1 extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }


    render() {
        return (
            <React.Fragment>
            <CardWrapper>
                <h1>Organize.</h1>
                <img src={organizeIcon} alt='organize Icon' />
                <Wrapper>
                    Organize your study videos
                    <br />
                    Study without distractions
                    <br />
                    and focus to achieve your goals!
                </Wrapper>
            
                <CardButton primary={true} onClick={this.continue}>
                    Continue
                </CardButton>
            </CardWrapper>
          
        </React.Fragment>
             
        )
    }
 }
export default Onboarding1;
                
        
           




                    