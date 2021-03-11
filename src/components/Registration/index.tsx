import React from 'react';
import styled from 'styled-components';
import DropDownWrapper from '../CustomUI/CustomDropDown';


const Registration = (props:any) => {
    const dropdownvalues = {
        apple:"Apple",
        banana: "Banana",
        strawberry: "Strawberry",
        sapotta: "Sapotta",
        peach:"peach",
        plum:"plum",
        orange:"Orange"
    };

// just a comment

    return(
        <DropDownWrapper list={dropdownvalues} length='100px' color='red'></DropDownWrapper>
    );

}

export default Registration;

