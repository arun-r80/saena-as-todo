import React from 'react';
import styled from 'styled-components';
import MainNav from './MainNav'

const HeaderWrapper = styled.header`
    width: 100%;
    height:80px;
    background-color: rgb(252, 153, 24);
`;

const ProfileWrapper = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    float:left;
    width: 10%;
    height: 100%;
    background-color: skyblue
`;

const ProfileImg = styled.div`
    height:50px;
    width: 50px;
    padding:1px;
    background-color: steelblue;
    border-radius: 50% 50%;
`;

const ProfileLogo = styled.div`
    font-size: 1.2em;
    width: 100%;
    padding-top: .7em;
    margin: 0px;
    text-align: center;
`;

const ProfileNameWrapper = styled.section`
    float:left;
    height:100%;
    width:60%;
    
`;

const ProfileName = styled.div`
    font-size: 1.2em;
    width: 80%;
    margin-left:5%;
    text-align: center;
    padding-top:1.4em;
    text-align:left;
    
`;

const MainMenuWrapper = styled.nav`
    float:left;
    height:100%;
    display:block;
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


const Header  =() =>{
    
        return(
        <HeaderWrapper>
            <ProfileWrapper > 
                <ProfileImg > 
                    <ProfileLogo> P</ProfileLogo>
                </ProfileImg>
            </ProfileWrapper>
            <ProfileNameWrapper>
                <ProfileName>Arun Ramamurthy</ProfileName>
            </ProfileNameWrapper>
            <MainNav></MainNav>
            {/* <MainMenuWrapper>
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
            </MainMenuWrapper> */}
        </HeaderWrapper>
        );
    
}

export default Header;