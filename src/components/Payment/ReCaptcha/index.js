import React from 'react';
import ReCAPTCHA from "react-google-recaptcha";



export const ReCaptchaRender = (props) => {
        const recaptchaRef = React.createRef();
        return (
            <ReCAPTCHA 
                ref={recaptchaRef}
                onChange={props.handleChange}
                sitekey="6LdCXOwaAAAAAOq2JHDUbABlM4nIZqT7U8Onf5Sz"/> 
        )

}