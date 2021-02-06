import React ,{Component,useState}from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import {updateLoginStatus } from '../../redux/actions';
import {useDispatch,useSelector} from 'react-redux';


const ButtonComp = styled.button`
    color:green;
`;

const ClickWrapper = styled.div`
    color: red;
`;

const SubMenuSpan = styled.span`
    display:inline-block;
    padding-top:0.7em;
    margin-left:0.5em;
    
`

const Counter =()=>{
    const [count, setCount] = useState(0);
    const updateLogin = useDispatch();
    let login = useSelector(state => state.systemReducer.login)
    return (
        <ClickWrapper >
            <ButtonComp onClick={() => updateLogin(updateLoginStatus(!login))}>Click Me</ButtonComp>
        </ClickWrapper>
    );
}

export default Counter;