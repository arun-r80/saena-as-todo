import axios from 'axios';


export const validateReferenceNumber = (props) => props ? undefined:"error";

export const asyncValidate = (values) => {
    console.log("Values in async validate: ", values);
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