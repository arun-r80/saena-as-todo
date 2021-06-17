/* global window.isCardNumberComplete */

import React from 'react';
import {Field, reduxForm,Form} from 'redux-form';
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';  
import MenuItem from '@material-ui/core/MenuItem';
import {RenderSelect} from '../PaymentControls/index'
import {RenderTextField} from '../PaymentControls/PaymentText';
import RenderButton from '../PaymentControls/Submit';
import {PaymentWrapper,
            PaymentHeader,
            FlxContainer,
            PaymentLabel,
            FlxPaymentLabel,
            FlxPaymentControl,
            PaymentOuter,
            ReCaptchaWrapper,
            CardDetailsErrorNotification
        }
                         from '../../Common';
import {validateReferenceNumber,asyncValidate,validateCaptcha} from '../validate';
import {ReCaptchaRender} from '../ReCaptcha'; 
import {PayBR} from '../PayBR';
import {connect} from 'react-redux';
import { useState, useEffect } from 'react';
import effectBORA from '../PayBR/effectBORA';
import {addBamboraResult} from '../../../redux/actions';

declare const window:any;


// const NewRow = styled.Row`
//     width: 100%;
// `;



const PaymentForm:typeof PaymentOuter = (props: Partial<{handleSubmit, invalid:boolean,anyTouched:boolean, change: any,refCC:object, submitting: boolean,isBamboraCalled: boolean, handleBAmboraSubmission: any, cbBambora:any }>) => {

    const {handleSubmit, invalid, anyTouched,change, refCC, submitting,isBamboraCalled,handleBAmboraSubmission,cbBambora} = props;
    let bamboraCustomCheckout;
    
    const [isBamboraLoaded, setIsBamboraloaded] = useState(true);
    const [customCheckout, setCustomCheckout] = useState({createOneTimeToken:(id:any, f: any)=> {}});

    useEffect(() => {
        console.log("In Use Effect");
        if(isBamboraLoaded){
        console.log("Loading Bambora")
        bamboraCustomCheckout = effectBORA();
        setCustomCheckout(bamboraCustomCheckout);
        console.log("bambora Custom Checkout from Use Effect ", bamboraCustomCheckout);
        setIsBamboraloaded(false);
    }   else {
        console.log("Bambora not loaded")
    }
    })
    
    const handlePaymentSubmit = (values, dispatch, props) => {console.log("Submitted ", values)
        console.log("Props from inside submit function ", props);
        console.log("bambora Custom Checkout from handle submit ", bamboraCustomCheckout);
        props.handleBAmboraSubmission(true);
        const isCardDetailsEmpty = (window.isCardNumberComplete) && window.isCVVComplete && window.isExpiryComplete;
        console.log("Are credit card vlalues empty ", !isCardDetailsEmpty);
        const isCreditCardNumberErrored= !(document.getElementById('cc-number-error')?.classList.contains('credit-bambora-error')) &&
        !(document.getElementById('cc-expiry-error')?.classList.contains('credit-bambora-error')) &&
        !(document.getElementById('cc-cvv-error')?.classList.contains('credit-bambora-error'));
       
        if(!(isCardDetailsEmpty && isCreditCardNumberErrored)){
            console.log("Please enter all Credit card details");
            document.getElementById('card-error-notification')?.classList.add('credit-bambora-error');
            return;
        } else {
            document.getElementById('card-error-notification')?.classList.remove('credit-bambora-error');    
        }

        console.log("Call Bambora Service");
        console.log("Get custom checkout ", customCheckout);

        customCheckout.createOneTimeToken('10e9aa9c-6da2-46c9-948f-efabe3eb2c6b', props.cbBambora);
        


 //check if any of credit card values are empty
    }
;

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
            <CardDetailsErrorNotification id="bambora-error-notification">Error from Bambora</CardDetailsErrorNotification>
            <RenderButton disabled={!isBamboraCalled &&(invalid || submitting)} />
        </Form>
    </PaymentWrapper>
    </PaymentOuter>
    
    )

}

export const Payment = reduxForm({
    form:'payment',
    destroyOnUnmount: false
    // ,
    // asyncValidate,
    // asyncChangeFields: ['reCaptcha']
})(PaymentForm)

 
