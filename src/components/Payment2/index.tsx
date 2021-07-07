import React,{useState, useEffect} from 'react';
import { PageContent,
            PaymentOuter
} from '../Common';
import {PaymentBanner} from './PaymentControls/PaymentBnr';
import {Field, reduxForm,Form} from 'redux-form';
import effectBORA from '../Payment/PayBR/effectBORA';
import {validateForm} from '../Payment/validate';
import SelectPayment from './PaymentControls/SelectPayment'

declare const window:any;


const PaymentForm2:typeof PaymentOuter = (props: Partial<{handleSubmit, invalid:boolean,anyTouched:boolean, change: any,refCC:object, submitting: boolean,isBamboraCalled: boolean, handleBAmboraSubmission: any, cbBambora:any }>) => {

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
        <PaymentOuter>Form is here
            <SelectPayment width="60%"/>
        </PaymentOuter>

    )

 }

 const PaymentForm = reduxForm({
    form:'payment2',
    destroyOnUnmount: false, 
    validate: validateForm
    // ,
    // asyncValidate,
    // asyncChangeFields: ['reCaptcha']
})(PaymentForm2)

 const Payment2 = (props) => {

   return (
       <div>
           <PageContent/>
           <PaymentBanner/>
           <PaymentForm/>
       </div>
       
   )

}

export default Payment2;