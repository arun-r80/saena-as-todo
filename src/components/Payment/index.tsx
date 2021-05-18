import React from 'react';
import {Field, reduxForm} from 'redux-form';
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';  
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import FormHelperText from '@material-ui/core/FormHelperText';
import {makeStyles} from '@material-ui/core/styles';


const PaymentWrapper = styled.div`
    width: 100%;
    margin: 5px;
    
`;
const PaymentHeader = styled.div`
    width: 100%;
    height: 60px;
    box-sizing: border-box;
    padding-left: 10px;
    padding-top: 15px;
    background-color: grey;
`;

const FlxContainer = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    align-items: center;
`;



const PaymentLabel = styled.div` 
    height: 40px;
    display: inline;
    width: 100%;
    margin-left: -15px;
`;

const FlxPaymentLabel = styled.div`

height: 40px;
box-sizing: border-box;
padding-top: 5px;
    @media screen and (max-width: 776px){
        width: 100%;
        display: block;
        
    }

    @media screen and (min-width: 777px) {
        width: 40%;
        
    }
`
const FlxPaymentControl = styled(FlxPaymentLabel)`
@media screen and (min-width: 777px) {
    width: 60%;
   
}  
`;

const PaymentOuter = styled.div`
    width: 100%;
    border: 1px solid red;
    color: black;  
`;

// const NewRow = styled.Row`
//     width: 100%;
// `;
const useStyles =   makeStyles({
    root:{
        width:'100%' }
    
})
const RenderSelect = ({
    input,
    label,
    meta:{touched, error},
    children
}) => {

    const classes = useStyles();

    return(
    <FormControl variant="filled" error={touched && error} classes={{root:classes.root}}>
        <Select className= "selectControl"
            {...input}
        >
            {children}
        </Select>
    </FormControl>
    )
}

const PaymentForm = (props) => {

    const {handleSubmit} = props;

    return(
    <PaymentOuter>
    <PaymentWrapper>
        <PaymentHeader>
         Payment Details
        </PaymentHeader>
        <form onSubmit={handleSubmit}>
            <Container fluid >
            <Row noGutters >
                <Col sm lg={4}>
                    <PaymentLabel>Type of Payment</PaymentLabel>
                </Col>
                <Col sm lg={8}>
                    <PaymentLabel>Selection Dropdown</PaymentLabel>
                </Col>
            </Row>
            </Container>
            <FlxContainer>
                <FlxPaymentLabel htmlFor='TestID'>Claim Reference </FlxPaymentLabel>
                <FlxPaymentControl id="TestID">
                    <Field
                        name="claimtype"
                        component={RenderSelect}
                        label="Claim Type"
                    >
                        <MenuItem value="Excess Claim">Excess Claim</MenuItem>
                        <MenuItem value="Policy Payment">Policy Payment</MenuItem>
                    </Field>
                   
                </FlxPaymentControl>

            </FlxContainer>
        </form>
    </PaymentWrapper>
    </PaymentOuter>
    )

}

const Payment = reduxForm({
    form:'payment'
})(PaymentForm)

export default Payment;
