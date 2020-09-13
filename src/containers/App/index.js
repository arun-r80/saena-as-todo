import React, {Component} from 'react';
import QRURL from '../../components/qrcode';

class App extends Component {
    render(){
        return (<div>
            Code Goes Here
            <QRURL url="www.cnn.com"/>
        </div>);
    }

}

export default App;
