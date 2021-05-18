import React ,{Component,useState, useEffect}from 'react';
import styled from 'styled-components';
import {RootStore, AppDispatch} from '../../redux/rootreducers';
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

type UserName = string;

const userName: UserName = "Arun"

const Counter =()=>{
    const [count, setCount] = useState(0);
    const updateLogin:AppDispatch = useDispatch();
    let login:boolean = useSelector((state:RootStore) => state.systemReducer.login)

    const handleClick = (login:boolean, count:number) => {updateLogin(updateLoginStatus(!login)); setCount(count+1)}

    useEffect(()=> {
        document.title = `You clicked ${count} times`;

    });

    return (
        <ClickWrapper >
            <ButtonComp onClick={() => {handleClick(login,count)}}>Click Me</ButtonComp>
        </ClickWrapper>
    );
}

export default Counter;

