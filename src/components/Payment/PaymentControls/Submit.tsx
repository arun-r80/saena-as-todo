import styled from 'styled-components';

const ButtonWrapper = styled.div`
    width: 100%;
    height: 42px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
`;

const ButtonPayment = styled.button`
    margin: 2px auto;
    background-color: ${props => (props.disabled == true) ? 'green' : 'red'};
    height: 42px;
    width: 108px;
    font: normal bold normal 13px "Arial";
    color: white;
    border-radius: 4px;
`;

const RenderButton = (props: Partial<{disabled}>) => {
   

    return(
     <ButtonWrapper>
         <ButtonPayment disabled={props.disabled}>
             Submit
         </ButtonPayment>
     </ButtonWrapper>
    )
};

export default RenderButton;