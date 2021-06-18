import axios from 'axios';
// const claimAmount = new Intl.NumberFormat('en-US',
//                         { style: 'currency', currency: 'USD',
//                         //  minimumFractionDigits: 2 
//                         });

const claimAmount = new Intl.NumberFormat('en-US', {style: 'currency', currency:'USD', maximumFractionDigits:0});
export const validateReferenceNumber = (props) => props ? undefined:"error";

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