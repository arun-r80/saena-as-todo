import React from 'react';
import styled from 'styled-components';
import NavItem from './NavItem/index.tsx';

const NavContainer = styled.div`
    height: 100vh;
    width: 20%;
    border: 1px solid red;
    font: normal normal normal 20px "Times New Roman",Arial, Verdana, Times, Serif;
    color: green;
    display: flex;
    flex-flow: column wrap;
    justify-content: flex-start;
    align-items: baseline;
    align-content: flex-start;
`;

const ToDoNav = (props) => {

    return (<NavContainer>
      <NavItem value="Work" color="#05e749"></NavItem>
    </NavContainer>);
}

export default ToDoNav;