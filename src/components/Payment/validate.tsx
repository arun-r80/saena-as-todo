import axios from 'axios';


export const validateReferenceNumber = (props) => props ? undefined:"error";

export const asyncValidate = (values) => {

    
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
    }).catch(error => console.log("Recaptcha validation failure ", error));

}