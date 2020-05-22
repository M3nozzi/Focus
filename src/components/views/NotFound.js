import React from 'react';
import styled from 'styled-components';
import error404 from '../../images/error/error404.svg'
import {CardWrapper} from "../auth/SignupStyle"; 


const Wrapper = styled.div`
     {
        text-decoration: none;
        color: #707070;
        margin-top:15px;
        font-family: 'Roboto';
        font-weight:700;
    }

    p {
        font-weight:400;
    }
`;

export default () => <><CardWrapper><img src={error404} alt="error404" /><Wrapper>  Page not found <br /> or <br/>session expired <br/> <p>Go <a href="/">back</a></p> </Wrapper></CardWrapper> </>
    
    
