import styled from 'styled-components';

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
    align-items: center;
`;



export const PaymentLabel = styled.div` 
    height: 40px;
    display: inline;
    width: 100%;
    margin-left: -15px;
`;

export const FlxPaymentLabel = styled.div`

height: 48px;
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
export const FlxPaymentControl = styled(FlxPaymentLabel)`
@media screen and (min-width: 777px) {
    width: 60%;
   
}  
`;

export const PaymentOuter = styled.div`
    width: 100%;
    border: 1px solid red;
    color: black;  
`;


