import styled from 'styled-components';
import React from 'react';
import {PaymentHeader,
        FlxContainer,
        FlxPaymentLabel,
        FlxPaymentControl,
        CardDetailsErrorNotification
} from '../../Common';
import {Field} from 'redux-form';
import { RenderTextField } from '../PaymentControls/PaymentText';
import effectBORA from './effectBORA';
import { useEffect,useState } from 'react';


export const PayBRWrapper = styled.div`
    width: 100%;
`
const BamboraWrapper = styled.div`
    width: 100%;
    
    background-image: none;
    background-origin: content-box;
    background-position: calc(99.5% ) center;
    background-repeat: no-repeat;
    background-size: contain;
    &.bambora-base{
        height: 32px;
        padding: 4px 4px;
        border:1px solid #C4C4C4; 
        border-radius: 4px;      
    }
    @media screen and (max-width: 776px){
    &.bambora-base{
        border: 2px solid red;
    }}
   
}
`

const ErrorMessageCC = styled.div`
    color: red;
    width: 100%;
    margin: 4px 10px;
    font-size: 12px;
    display:none;
    &.credit-bambora-error{
        display: block;
    }
`

export const PayBR:typeof PayBRWrapper = (props:any) => {

    const {refCC:{cardNumberRef,ccExpiryRef,ccCVVRef}}=props;
    // const [isBamboraLoaded, setIsBamboraloaded] = useState(true);

    // useEffect(() => {
    //     console.log("In Use Effect");
    //     if(isBamboraLoaded){
    //     console.log("Loading Bambora")
    //     effectBORA();
    //     setIsBamboraloaded(false);
    // }   else {
    //     console.log("Bambora not loaded")
    // }
    // })

    return(
        <PayBRWrapper>
            <PaymentHeader>
                Card Details
            </PaymentHeader>
            <CardDetailsErrorNotification id="card-error-notification">Please enter all card details and click Submit again</CardDetailsErrorNotification>
            <FlxContainer>
                <FlxPaymentLabel>Creditcard Number</FlxPaymentLabel>
                {/* <BamboraWrapper id="cc-number"></BamboraWrapper> */}

                <FlxPaymentControl>
                    <Field
                        name="CCNumber"
                        component={BamboraWrapper}
                        label="CCNumber"
                        id="cc-number"
                        onChange={() => console.log("Being changed")}
                        placeholder="Enter Credit Card Number"
                    />    
                     <ErrorMessageCC id="cc-number-error" ref={cardNumberRef}>Enter Credit Card Number</ErrorMessageCC>                   
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
                        component={BamboraWrapper}
                        />
                        <ErrorMessageCC id="cc-expiry-error" ref={ccExpiryRef}>Enter Credit Card Expiry</ErrorMessageCC>
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
                        component={BamboraWrapper}
                    
                    />
                    <ErrorMessageCC id="cc-cvv-error" ref={ccCVVRef}>Enter Credit Card Number or CVV</ErrorMessageCC>
                </FlxPaymentControl>
            </FlxContainer>
        </PayBRWrapper>
    )

}
