// import React from 'react';
import styled from "styled-components";
import Theme from "../../Theme";

 const Cards = styled.div`

    color: #333;
    background-color:#fff;
    border-radius: ${props => Theme.baseRadius};
    border: ${props => `1px solid ${Theme.primary} 33`};
    padding: 1.5rem;
    width: ${props => props.narrow ? "300px" : "800px"};
    max-width: 300px;
    text-align: center;
   
`
 const Divider = styled.hr`

    width: 50%;
    opacity: 0.9;
    margin-bottom: 2rem;
    margin-top:0
`

 const Icon = styled.p`

    font-size: 5rem;
    margin:0;
    user-select: none;
    font-family:'Roboto';
    font-weight:700;
    color: #F97D7D;
    opacity: 100%;

`

export {
    Cards,
    Divider,
    Icon
}