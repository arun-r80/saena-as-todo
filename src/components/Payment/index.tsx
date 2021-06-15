/* global window.isCardNumberComplete */

import React from 'react';
import {Field, reduxForm,Form} from 'redux-form';
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';  
import MenuItem from '@material-ui/core/MenuItem';
import {RenderSelect} from './PaymentControls/index'
import {RenderTextField} from './PaymentControls/PaymentText';
import RenderButton from './PaymentControls/Submit';
import {PaymentWrapper,
            PaymentHeader,
            FlxContainer,
            PaymentLabel,
            FlxPaymentLabel,
            FlxPaymentControl,
            PaymentOuter,
            ReCaptchaWrapper
        }
                         from '../Common';
import {validateReferenceNumber,asyncValidate,validateCaptcha} from './validate';
import {ReCaptchaRender} from './ReCaptcha'; 
import {PayBR} from './PayBR';

declare const window:any;


// const NewRow = styled.Row`
//     width: 100%;
// `;

const handlePaymentSubmit = (values) => {console.log("Submitted ", values)
        const isCreditCardDetailsFilled = false;
        
        const isCardDetailsEmpty = (window.isCardNumberComplete) && window.isCVVComplete && window.isExpiryComplete;
        console.log("Are credit card vlalues empty ", !isCardDetailsEmpty);
        const isCreditCardNumberErrored= !(document.getElementById('cc-number-error')?.classList.contains('credit-bambora-error')) &&
        !(document.getElementById('cc-expiry-error')?.classList.contains('credit-bambora-error')) &&
        !(document.getElementById('cc-cvv-error')?.classList.contains('credit-bambora-error'));

        console.log("If any credit card values are errored ", !isCreditCardNumberErrored);
        console.log((isCardDetailsEmpty && isCreditCardDetailsFilled));
        if(!(isCardDetailsEmpty && isCreditCardNumberErrored)){
            console.log("Please enter all Credit card details");
            document.getElementById('card-error-notification')?.classList.add('credit-bambora-error');
        } else {
            document.getElementById('card-error-notification')?.classList.remove('credit-bambora-error');    
        }

 //check if any of credit card values are empty
    }
;

const PaymentForm:typeof PaymentOuter = (props: Partial<{handleSubmit, invalid:boolean,anyTouched:boolean, change: any,refCC:object}>) => {

    const {handleSubmit, invalid, anyTouched,change, refCC} = props;

    return(
        
    <PaymentOuter>
    <PaymentWrapper>
        <PaymentHeader>
         Payment Details
        </PaymentHeader>
        <Form onSubmit={handleSubmit(handlePaymentSubmit)}>
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
                        <option value="Excess Claim">Excess Claim</option>
                        <option value="Policy Payment">Policy Payment</option>
                    </Field>
                   
                </FlxPaymentControl>
            </FlxContainer>
            <FlxContainer>
                <FlxPaymentLabel>Reference Number</FlxPaymentLabel>
                <FlxPaymentControl>
                    <Field
                       name="referencenumber"
                       component={RenderTextField}
                       label="Reference Number"
                       placeholder="Enter Reference Number"
                       id="referencenumber"
                       validate={validateReferenceNumber}
                       >
                          
                       </Field>
                </FlxPaymentControl>
            </FlxContainer>
            {/* <ReCaptchaWrapper>
                <Field
                name="reCaptcha"
                component={ReCaptchaRender}
                 handleChange={value => {
                                         change("reCaptcha",value)   
                }}
                validate={validateCaptcha}
                />
            </ReCaptchaWrapper> */}
            <PayBR refCC={refCC}/>
            <RenderButton disabled={(invalid)} />
        </Form>
    </PaymentWrapper>
    </PaymentOuter>
    
    )

}

const Payment = reduxForm({
    form:'payment',
    destroyOnUnmount: false
    // ,
    // asyncValidate,
    // asyncChangeFields: ['reCaptcha']
})(PaymentForm)

const  PaymentRefWrapper = (props) => {
    const cardNumberRef = React.createRef(); 
    const ccExpiryRef = React.createRef();
    const ccCVVRef= React.createRef();

    

    return (<Payment refCC={{cardNumberRef,ccExpiryRef,ccCVVRef}}/>)
}

 export default PaymentRefWrapper;

