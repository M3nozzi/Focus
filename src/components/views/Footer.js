import React from 'react';
import styled from 'styled-components';

const Footerstyle = styled.footer`
    background: #454343;
    height: 3.80rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #DEDEDE;
    bottom:0;
    position: absolute;
    flex:1;
    width: 100%;
    font-size: 0.9rem;

`;

const Footer = () => (
    <Footerstyle>
       <p style={{marginTop: 10, marginBottom: 0.5}}>&#64; FOCUS PLAY</p>
       <p style={{fontSize:"0.6rem"}}>Developed by Fábio and Rhaysa</p>
    </Footerstyle>
);

export default Footer;