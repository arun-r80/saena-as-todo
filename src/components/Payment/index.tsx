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
            ErrorValidation
        }
                         from '../Common';
import {validateReferenceNumber,asyncValidate} from './validate';
import {ReCaptchaRender} from './ReCaptcha'; 


// const NewRow = styled.Row`
//     width: 100%;
// `;

const handlePaymentSubmit = (values) => console.log("Submitted ", values);

const PaymentForm:typeof PaymentOuter = (props: Partial<{handleSubmit, invalid:boolean,anyTouched:boolean, change: any}>) => {

    const {handleSubmit, invalid, anyTouched,change} = props;

    

 



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
                       validate={validateReferenceNumber}
                       >
                          
                       </Field>
                </FlxPaymentControl>
            </FlxContainer>
            <Field
             name="reCaptcha"
             component={ReCaptchaRender}
             handleChange={value => {
                                     change("reCaptcha",value)   
            }}
             />

            <RenderButton disabled={(!invalid)} />
        </Form>
    </PaymentWrapper>
    </PaymentOuter>
    
    )

}

const Payment = reduxForm({
    form:'payment',
    destroyOnUnmount: false
    
    
})(PaymentForm)

export default Payment;
