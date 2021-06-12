import styled from 'styled-components';
import React from 'react';
import {PaymentHeader,
        FlxContainer,
        FlxPaymentLabel,
        FlxPaymentControl
} from '../../Common';
import {Field} from 'redux-form';
import { RenderTextField } from '../PaymentControls/PaymentText';

export const PayBRWrapper = styled.div`
    width: 100%;
`

const ErrorMessageCC = styled.div`
    color: red;
    width: 100%;
    margin: 4px 10px;
`

export const PayBR:typeof PayBRWrapper = (props:any) => {

    const {refCC:{cardNameMessageRef,ccNumberRef,ccCVVRef}}=props;

    return(
        <PayBRWrapper>
            <PaymentHeader>
                Card Details
            </PaymentHeader>
            <FlxContainer>
                <FlxPaymentLabel>Cardholder Name</FlxPaymentLabel>
                <FlxPaymentControl>
                    <Field
                        name="CCName"
                        component={RenderTextField}
                        label="CCName"
                        id="cc-name"
                        placeholder="Enter Credit Card Name"
                    />                       
                </FlxPaymentControl>
                </FlxContainer>
                <FlxContainer>
                <FlxPaymentLabel>Creditcard Number</FlxPaymentLabel>
                <FlxPaymentControl>
                    <Field
                        id="cc-number"
                        name="CCNumber"
                        label="CCNumber"
                        placeholder="Enter Credit Card Number"
                        component={RenderTextField}
                    />
                    <ErrorMessageCC id="ccNumber-error" ref={cardNameMessageRef}>Enter Credit Card Name</ErrorMessageCC>
                </FlxPaymentControl>
                </FlxContainer>
                <FlxContainer>
                <FlxPaymentLabel>Creditcard Expiry</FlxPaymentLabel>
                <FlxPaymentControl>
                    <Field
                        id="cc-expiry"
                        name="CCExpiry"
                        label="CCExpiry"
                        placeholder="MM/YYYY"
                        component={RenderTextField}
                        />
                </FlxPaymentControl>
                </FlxContainer>
                <FlxContainer>
                <FlxPaymentLabel>CVV</FlxPaymentLabel>
                <FlxPaymentControl>
                    <Field
                        id="cc-cvv"
                        name="CC-CVV"
                        label="CC-CVV"
                        placeholder="Enter CVV"
                        component={RenderTextField}
                    
                    />
                </FlxPaymentControl>
            </FlxContainer>
        </PayBRWrapper>
    )

}
