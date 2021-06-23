import React from 'react';
import {PaymentWrapper,
    PaymentHeader,
    FlxContainer,
    PaymentLabel,
    FlxPaymentLabel,
    FlxPaymentControl,
    PaymentOuter,
    ReCaptchaWrapper,
    CardDetailsErrorNotification
}   from '../../Common';
import {Field} from 'redux-form';
import { RenderTextField } from '../PaymentControls/PaymentText';
import { createTextMask } from 'redux-form-input-masks';
import {validateEmail,validateMandatory} from '../validate';



const ContactDetails = (props) => {
    const phoneMask = createTextMask({
        pattern: '(999) 999-9999',
      });

    return (
        <div>
        <PaymentHeader>
         Contact Details
        </PaymentHeader>
     
            <FlxContainer>
                <FlxPaymentLabel htmlFor='contact-name'>Name</FlxPaymentLabel>
                <FlxPaymentControl >
                    <Field
                        name="contact-name"
                        component={RenderTextField}
                        placeholder="Enter Full Name"
                        label="Contact Name"
                        id="contact-name"
                    >
                        
                    </Field>
                   
                </FlxPaymentControl>
            </FlxContainer>
            <FlxContainer>
                <FlxPaymentLabel>Phone Number</FlxPaymentLabel>
                <FlxPaymentControl>
                    <Field
                       name="phone-number"
                       component={RenderTextField}
                       label="Phone Number"
                       placeholder="Enter Phone Number"
                       id="phone-number"
                       {...phoneMask}
                       >
                          
                       </Field>
                       
                </FlxPaymentControl>
            </FlxContainer>
            <FlxContainer>
            <FlxPaymentLabel>Email Address</FlxPaymentLabel>
                <FlxPaymentControl>
                    <Field
                       name="email-address"
                       component={RenderTextField}
                       label="Email Address"
                       placeholder="Enter E-Mail Address"
                       type="email"
                       id="email-address"
                       validate={validateEmail}
                       
                       >
                          
                       </Field>
                       
                </FlxPaymentControl>
            </FlxContainer>

            </div>

    )
}

export default ContactDetails;
