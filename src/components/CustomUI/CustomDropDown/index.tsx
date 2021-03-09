import { func } from 'prop-types';
import React,{useState} from 'react';
import styled from 'styled-components';
import { createLogicalOr } from 'typescript';

// TO-DO:
// a. configuration of select item outer div - color
// b. Width of Wrapper div to be configured. 

const DropDownWrapper = styled.div`
width: ${props => props.length};
height: 3em;
background-color: ${props => props.color ? props.color:'red' };
border: 2px solid rgb(7, 129, 243);
border-radius: 10px;
position: relative;

&:after{
    position: absolute;
    
    margin-left: ${props => calculateWidth(props.length)}; //TO-DO
    margin-top: -0px;
    content: '\f0d7';
    width: 1em;
    color:red;
    height: 1em;
    font-family: "Font Awesome 5 Free";
    font-weight: 900;
    font-size: 3em;
    padding-top: 2px;
    padding-left: 14px;
}

`

const calculateWidth= (w) => {
    if(w.substring(w.length -2, w.length) == 'px') {
        const marginLeft = Number.parseInt(w.substring(0,w.length-2)) -52;
        return marginLeft + 'px';
    }

}


const ListItems = styled.select`
display:none;

`
const OptionListItem = styled.option`

`;

const UIListItems = styled.div`
position: absolute;
background-color: rgb(7, 129, 243); //TO-DO
border-radius:0px 0px 7px 7px;
top: 98%;
left: 0;
right: 0;
z-index: 99;
display: ${props => (props.isDropDownOpen == 'false' ? "none":"block")}
`;

const UIOptionListItem = styled.div`
color: #ffffff;
padding: 8px 16px;
border: 1px solid transparent;
border-color: transparent transparent rgba(0, 0, 0, 0.1) transparent;
cursor: pointer;
`;
const UISelectedItem = styled.div`
color: #ffffff;
background-color: rgb(7, 129, 243);
width: 100%;
padding: 12px 16px;
box-sizing:border-box;
cursor: pointer;
border-radius: 7px;
height:100%;
position: absolute;


`;
const handleDropDownOpen = (props:boolean,setDropDownOpenstate) =>  setDropDownOpenstate(!props)

const CustomDropDown = function(props:any): JSX.Element{
      
    const itemvalueMap:string[] = Object.keys(props.list);
    let [selectedIndex, setSelectedIndex] = useState(0);
    let [isDropDownOpen,setDropDownOpenstate] = useState(false);

    return (
        <DropDownWrapper length='700px' color='white' onClick={()=> handleDropDownOpen(isDropDownOpen,setDropDownOpenstate)}>
            <UISelectedItem length='700px'  >{props.list[itemvalueMap[selectedIndex]]}</UISelectedItem>
            <UIListItems isDropDownOpen={isDropDownOpen.toString()} >
                {itemvalueMap.map((el:string,index:number)=> 
                    <UIOptionListItem key={index} onClick={()=>{console.log("Selected Index: ",index);setSelectedIndex(index)}}>{props.list[el]}</UIOptionListItem>
                )
                }
            </UIListItems>
            <ListItems name="select" id="select" value={itemvalueMap[selectedIndex]}>
                {itemvalueMap.map((el:string,index:number)=> {
                    return <OptionListItem  key={index} value={el} >{props.list[el]}</OptionListItem>})}
            </ListItems>
        </DropDownWrapper>
    );
 }

 export default CustomDropDown;