import styled from 'styled-components';
import {useSelector, useDispatch} from 'react-redux';

const NavItemWrapper = styled.div`


display: flex;
flex-flow: row nowrap;
width: 100%;
box-sizing: border-box;
height: 50px;


`;
const NavItemTabIndicator = styled.div`
    
    background-color: ${props => props.backgroundColor};
    width: 5%;
    height: 50px;

`;
const NavItemLabel = styled.div`
padding-left: 5px;
background-color: green;
padding-top: 10px;
padding-bottom: 8px;
width: 95%;
box-sizing: border-box;
height: 50px;
font-size: 24px;
color: white;
`;

const NavItem: typeof NavItemWrapper = (props: {value: string, color: string}) => {

    

    return (
        <NavItemWrapper>
            <NavItemTabIndicator backgroundColor = {props.color} />
            <NavItemLabel>{props.value}</NavItemLabel>
        </NavItemWrapper>
    )
}

export default NavItem;