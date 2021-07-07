import React,{useState} from 'react';
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
import {Field} from 'redux-form';
import { RenderTextField } from '../PaymentControls/PaymentText';
import { RenderSelect } from '../PaymentControls';
import {validateReferenceNumber} from '../validate';
import { HelpText } from '../PaymentControls/HelpText';
import {createNumberMask} from 'redux-form-input-masks';


const PaymentDetails = (props:any) =>{
    const [helptext,setHelpText] = useState("");
    const currencyMask = createNumberMask({
        prefix:"$",
        decimalPlaces:2,
        locale:'en-US'
    })

    return (
        <div>
<PaymentHeader>
         Payment Details
        </PaymentHeader>
     
            <FlxContainer>
                <FlxPaymentLabel htmlFor='TestID'>Claim Type</FlxPaymentLabel>
                <FlxPaymentControl id="TestID">
                    <Field
                        name="claim-type"
                        component={RenderSelect}
                        onChange={(e, newvalue) => newvalue  == "Excess Claim" ? setHelpText("Excess Claim"): setHelpText("Policy")}
                        label="Claim Type"
                    >
                        <option>Select Payment Type</option>
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
                       <HelpText value={helptext}></HelpText>
                </FlxPaymentControl>
            </FlxContainer>
            <FlxContainer>
            <FlxPaymentLabel>Claim Amount</FlxPaymentLabel>
                <FlxPaymentControl>
                    <Field
                       name="claim-amount"
                       component={RenderTextField}
                       label="Reference Number"
                       placeholder="Enter Claim Amount"
                       id="claim-amount"
                       {...currencyMask}
                       
                       >
                          
                       </Field>
                       
                </FlxPaymentControl>
            </FlxContainer>

            </div>
    )
}

export default PaymentDetails;