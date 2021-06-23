

import styled from 'styled-components';
// @ts-ignore
import zurichheader from '../../images/zurich_logo.PNG'





const MainHeading = styled.h1`
color: #2067AE;
font-size: 25px;
padding-top: 20px;
padding-bottom: 16px;
width: 100%;
margin-left: 52px;

`
const MainPara = styled.p`
font-size: 12px;
    padding-bottom: 20px;
    margin-left: 52px;
    margin-right: 52px;
`
const PageContentWrapper = styled.div`
width: 100%;
`

export const PageContent = (props) => {
    return (
        <PageContentWrapper>
            <MainHeading>How to make your payment online</MainHeading>
            <MainPara>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id. Sed rhoncus, tortor sed eleifend tristique, tortor mauris molestie elit, et lacinia ipsum quam nec dui. </MainPara>
        </PageContentWrapper>

    )

}

const HeaderWrapper = styled.div`
width: 100%;
border-bottom: 1px solid grey;
`

const LOGOIMG = styled.img`
    margin: 2px 42%;
`
export const Header = (props) => {

    return (
        <HeaderWrapper>
            <LOGOIMG src={zurichheader} alt="logo"/>
        </HeaderWrapper>
    )
}

export const PaymentWrapper = styled.div`
    width: 99%;
    margin: 5px 5px 5px 3.5px;
    
    box-sizing: border-box;
`;
export const PaymentHeader = styled.div`
    width: 100%;
    height: 60px;
    box-sizing: border-box;
    padding-left: 10px;
    padding-top: 15px;
    background-color: grey;
`;

export const FlxContainer = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    align-items: top;
    margin-bottom: 12px;
    margin-top: 12px;
    
`;



export const PaymentLabel = styled.div` 
    height: 40px;
    display: inline;
    width: 100%;
    margin-left: -15px;
`;


export const CardDetailsErrorNotification = styled.div`
    display:none;    
    width: 100%;
    font-size: 12px;
    color: red;
    padding: 4px;
    height: 24px;
    margin: 4px; 
    &.credit-bambora-error{
        display:block;
    }

`

export const FlxPaymentLabel = styled.div`


box-sizing: border-box;
padding-top: 5px;
    @media screen and (max-width: 776px){
        width: 100%;
        display: block;
        
    }

    @media screen and (min-width: 777px) {
        width: 30%;
        
    }
`



export const ErrorValidation = styled.div`
    color: red;
    font: 13px "Arial";
    padding-top: 2px;
    padding-bottom: 2px;
    margin-bottom: 4px;
`

export const FlxPaymentControl = styled(FlxPaymentLabel)`
@media screen and (min-width: 777px) {
    width: 60%;
   
}  
`;

export const ReCaptchaWrapper = styled.div`
    margin-top: 8px;
    margin-bottom: 8px;
`;

export const PaymentOuter = styled.div`
    width: 100%;
    border: 1px solid red;
    color: black;  
`;


