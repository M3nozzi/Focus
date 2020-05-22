import React from "react";
import styled, { css } from "styled-components";


export const FormStyleInput = styled.input`
padding: 7px 0;
width: 100%;
font-family: inherit;
font-size: 14px;
border-top: 0;
border-right: 0;
border-bottom: 1.5px solid #ddd;
border-left: 0;
transition: border-bottom-color 0.25s ease-in;

&:focus {
  border-bottom-color: #00d1b2;
  outline: 0;
}
`;


export const FormStyleWrapper = styled.div`
  overflow: hidden;
  padding: 0 0 32px;
  margin: 48px auto 0;
  width: 300px;
  font-family: Quicksand, arial, sans-serif;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
  border-radius: 8px;
`;