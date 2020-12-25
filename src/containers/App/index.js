import React, {Component} from 'react';
import QRURL from '../../components/qrcode';
import Header from '../../components/Header';

class App extends Component {
    render(){
        return (
        <div>
            <Header/>
            Code Goes Here
            <QRURL url="www.cnn.com"/>
        </div>);
    }

}

export default App;
