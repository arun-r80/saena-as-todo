import React, {Component} from 'react';
import QRURL from '../../components/qrcode';
import Header from '../../components/Header';
import Counter from '../../components/Counter/index.tsx';
import {Provider} from 'react-redux'; 
import {createStore} from 'redux';
import ToDoRouter from '../../routes';
import rootreducer from '../../redux/rootreducers';


const store = createStore(rootreducer);

class App extends Component {
    render(){
        return (
        <div>
            <Provider store = {store}>
                <Header/>
                Code Goes Here
                <ToDoRouter/>
                
            </Provider>
        </div>);
    }
}

export default App;
