import React from 'react';
import styled from 'styled-components';
import {connect,useSelector} from 'react-redux';
import PropTypes from 'prop-types';



const MainMenuWrapper = styled.nav`
    float:left;
    height:100%;
    display:${props => ((props.login == true)? 'block' : 'none')};
    width: 20%;
`;

const MainMenu = styled.ul`
    width: 100%;
    height:100%;
    margin: 0px;
    padding: 0px;
    display:flex;
    justify-content:left;
    align-items: center;
    list-style: none;
`;

const MainMenuItems = styled.div`
    display:inline-block;
    font-size:1em;
    position: relative;
    height:100%;
    width: 40%;
    
    list-item-type: none;
   
`;

const MainMenuSpan = styled.a`
    display:inline-block;
    height:100%;
    padding-top:2em;
    &:hover > div{
        display:block;
        
    }
`;

const SubMenuWrapper = styled.div`
    display:none;
    position: absolute;
    margin-top:1.8em;
    color:rgb(252, 153, 24);
    border: 1px solid rgb(252, 153, 24);
    width:100px;
   
`;
   
const SubMenuItems = styled.div`
    font-size:.9em;
    width:100%;
    border-top: 0px;
    border-left:1px;
    border-right:1px;
    border-bottom:1px;
    border-color: rgb(252, 153, 24);
    border-style:solid;
    height:2.5em;
`;
const SubMenuSpan = styled.span`
    display:inline-block;
    padding-top:0.7em;
    margin-left:0.5em;
`

const MainNav = () => {
    const loginStatus = useSelector(state => state.systemReducer.login);

    
    return(<MainMenuWrapper login={loginStatus}>
        <MainMenu>
            <MainMenuItems>
            <MainMenuSpan>Profile
                <SubMenuWrapper>
                    <SubMenuItems><SubMenuSpan>Name</SubMenuSpan></SubMenuItems>
                    <SubMenuItems><SubMenuSpan>Orders</SubMenuSpan></SubMenuItems>
                    <SubMenuItems><SubMenuSpan>Items</SubMenuSpan></SubMenuItems>
                    <SubMenuItems><SubMenuSpan>Contact</SubMenuSpan></SubMenuItems>
                    <SubMenuItems><SubMenuSpan>Settings</SubMenuSpan></SubMenuItems>
                </SubMenuWrapper>
                </MainMenuSpan>
            </MainMenuItems>
            <MainMenuItems>                   
                <MainMenuSpan>To-Do
                <SubMenuWrapper>
                    <SubMenuItems><SubMenuSpan>List</SubMenuSpan></SubMenuItems>
                    <SubMenuItems><SubMenuSpan>Collection</SubMenuSpan></SubMenuItems>
                    <SubMenuItems><SubMenuSpan>Archive</SubMenuSpan></SubMenuItems>
                </SubMenuWrapper>
                </MainMenuSpan>
            </MainMenuItems>
        </MainMenu>
    </MainMenuWrapper>)

}

const mapStateToPropos = ({systemReducer:{login}}) => ({
    login
})

MainNav.propTypes = {
    login: PropTypes.bool
}

export default connect(mapStateToPropos,null)(MainNav);
