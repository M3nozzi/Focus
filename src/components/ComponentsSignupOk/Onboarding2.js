import React, { Component } from 'react';
import styled from 'styled-components';
import creativity from '../../images/Onboarding/Creativity.svg'
import { CardWrapper, CardButton } from "../auth/SignupStyle"; 
import { Link } from 'react-router-dom';



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

 class Onboarding2 extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }


    render() {
        return (
            <React.Fragment>
            <CardWrapper>
                <h1>Focus.</h1>
                <img src={creativity} alt='creativity icon' />
                <Wrapper>
                    Organize your study videos
                    <br />
                    Study without distractions
                    <br />
                    and focus to achieve your goals!
                </Wrapper>
            
                <Link to={"/main"}><CardButton> OK</CardButton></Link>
            </CardWrapper>
     
        </React.Fragment>
             
        )
    }
 }
export default Onboarding2;



