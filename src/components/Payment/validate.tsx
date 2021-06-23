import axios from 'axios';
// const claimAmount = new Intl.NumberFormat('en-US',
//                         { style: 'currency', currency: 'USD',
//                         //  minimumFractionDigits: 2 
//                         });
const emailRegex = /^\w+([\.-]?\w+)+@\w+([\.:]?\w+)+(\.[a-zA-Z0-9]{2,3})+$/;

const claimAmount = new Intl.NumberFormat('en-US', {style: 'currency', currency:'USD', maximumFractionDigits:0});
export const validateMandatory = value => (value  ? undefined : 'Required');
export const validateForm = (values) => {
    const error = {};
    
    //validations for contact details: 
    if (!values["contact-name"]){ error["contact-name"] = "Please enter contact name"}
    if(!values["phone-number"]) {error["phone-number"]="Please enter phone number"}
    if(!values["email-address"]){error["email-address"]="Please enter email address"}
    if(!values["claim-amount"]){error["claim-amount"]="Please enter claim amount"}
    
    return error;

}

export const validateEmail =(value) =>{ 
    if (value ){
        console.log("Value ", value.match(emailRegex)); 
        if ( value.match(emailRegex)){
            return null;
        } else {
            return "Invalid Email"
        }

    }  else return null;
}  
    
   // && value.match(emailRegex)) ? null : "Invalid Email"}; 
export const validateReferenceNumber = (value, allValues, props, name) =>{
    console.log("validate Reference, All Values ", allValues);
    if(!allValues["claim-type"]) return undefined;
    if(allValues["claim-type"] == "Excess Claim"){
        const regexClaimRef = /^[\d]{10}(?:[\d]{2})?$/
        const regexClaimRef2 = /^[\w]{7}(?:[\w]{3})?(?:[A-Za-z]{3})$/
    }
};
export const formatCurrency = (value) => {
    if(!value) return;
    console.log("Value from Currency Field: ",value);
    console.log("Cleaned Value ", value.replace(",",'').replace("$",''));
    return (value ? claimAmount.format(value.replace(",",'').replace("$",'')) : "")
    ;}

export const normalizeCurrency =( value, previousValue) => {
    console.log("From Normalize: Value ", value, "Previous Value ",previousValue);
    if(previousValue && (previousValue.match(".") != null)){
        let lastDigit = value.slice(-1);
        let previousFormattedValue = value.slice(0,value.length -1 );
        console.log("Previous Formatted value ", previousFormattedValue);
        let cleanedPreviousFormattedValue = Number.parseInt(previousFormattedValue.replace(",",'').replace("$",''));
        console.log("Cleaned Previous Formatted value ", cleanedPreviousFormattedValue);
        let newValue = String(cleanedPreviousFormattedValue) + String(lastDigit);
        return newValue;
    }
    
        return    value.replace(",",'').replace("$",'');




}

export const validateCaptcha = (value) => console.log("In Validate for Captcha");

export const asyncValidate = (values, dispatch, props) => {
    console.log("Values in async validate: ", values);
    console.log("Values for prop ", props);
    if ( !values.reCaptcha ) {return Promise.reject({reCaptcha: "Select this"})}

    console.log("In Async Validate: ", values);
    //return Promise.resolve();
    return axios.post("https://www.google.com/recaptcha/api/siteverify",
        {
            secret: "6LdCXOwaAAAAABGVUCpslGMFcNVjA5Ef5vmoTNiD",
            response: values.reCaptcha
        },
        {
            headers:{
                'Referrer-Policy':'no-referrer-when-downgrade'
            }
        }
    ).then(response => {
        console.log("Response ", response);
        return {}
    }).catch(error => {console.log("Recaptcha validation failure ", error)
                        return {reCaptcha:"error"}

});

}