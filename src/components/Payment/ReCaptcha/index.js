import React from 'react';
import ReCAPTCHA from "react-google-recaptcha";



export const ReCaptchaRender = (props) => {
        const {meta:{touched,error}}= props;
        const recaptchaRef = React.createRef();
        return (
            <ReCAPTCHA 
                ref={recaptchaRef}
                onChange={props.handleChange}
                sitekey="6LdCXOwaAAAAAOq2JHDUbABlM4nIZqT7U8Onf5Sz"> 
                {error && <span>{error}</span>}
                </ReCAPTCHA>
        )

}