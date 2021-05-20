import React from 'react';
import {Field, reduxForm} from 'redux-form';
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';  
import MenuItem from '@material-ui/core/MenuItem';
import {RenderSelect} from './PaymentControls/index'
import {RenderTextField} from './PaymentControls/PaymentText';
import {PaymentWrapper,
            PaymentHeader,
            FlxContainer,
            PaymentLabel,
            FlxPaymentLabel,
            FlxPaymentControl,
            PaymentOuter
        }
                         from '../Common';
import {ThemeProvider} from '@material-ui/core/styles';
import formTheme from '../Theme/theme.json';

// const NewRow = styled.Row`
//     width: 100%;
// `;

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
                <FlxPaymentLabel htmlFor='TestID'>Claim Type </FlxPaymentLabel>
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
            <FlxContainer>
                <FlxPaymentLabel>Reference Number</FlxPaymentLabel>
                <FlxPaymentControl>
                    <Field
                       name="referencenumber"
                       component="RenderTextField"
                       label="Reference Number"
                       >
                           <RenderTextField {...props}/>
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
