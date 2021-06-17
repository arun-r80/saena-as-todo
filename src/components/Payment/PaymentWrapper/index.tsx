import React,{useState} from 'react';
import {Payment} from '../Form';
import {connect} from 'react-redux';
import { addBamboraResult } from '../../../redux/actions';

const  PaymentRefWrapper = (props: Partial<{history: any,addBamboraResult: any} >) => {
    const cardNumberRef = React.createRef(); 
    const ccExpiryRef = React.createRef();
    const ccCVVRef= React.createRef();
    const {addBamboraResult, history} = props;
    const [isBamboraCalled, setIsBamboraCalled] = useState(false);
    const [isBamboraErrored, setIsBamboraErrored] = useState(false);

    console.log("Props from payment wrapper" , props);

    const cbBambora = (response) => {
        setIsBamboraCalled(false);
        console.log("Bambora Response: ", response);
        addBamboraResult(response);
        

    }
    

    return (<Payment refCC={{cardNumberRef,ccExpiryRef,ccCVVRef}}  isBamboraCalled={isBamboraCalled} handleBAmboraSubmission={setIsBamboraCalled} cbBambora={cbBambora}/>)
}

 export default connect(null, {addBamboraResult})(PaymentRefWrapper);

