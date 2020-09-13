import React, {Component} from 'react';
import QRCode from 'react-qr-code';

class QRURL extends Component {
  constructor(props){
      super(props);
  }

  render(){
      return (<QRCode value={this.props.url}/>);
  }
}

export default QRURL;
