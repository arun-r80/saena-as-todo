import React from 'react';
import styled from 'styled-components';

const ErrorText = styled.div`
    width: 100%; 
    padding: 8px 6px;
    position: relative; 
    display:${props => props.value == "" ? "none" : "block"}
`

export const HelpText = (props) => <ErrorText>{props.value}</ErrorText>