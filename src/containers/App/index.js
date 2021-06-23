import React, {Component} from 'react';
import QRURL from '../../components/qrcode';
import {Header} from '../../components/Common';
import Counter from '../../components/Counter/index.tsx';
import {Provider} from 'react-redux'; 
import {createStore} from 'redux';
import ToDoRouter from '../../routes';
import rootreducer from '../../redux/rootreducers';
import { configureStore } from '@reduxjs/toolkit';
import { ThemeProvider } from 'styled-components';
import Theme from '../../components/Theme/theme.json';


const store = configureStore({reducer:rootreducer});

class App extends Component {
    
    render(){
        console.log(store)
        return (
        <div>
            <Provider store = {store}>
               
                    <Header/>
                        
                    <ToDoRouter />
                
            </Provider>
        </div>);
    }
}

export default App;
