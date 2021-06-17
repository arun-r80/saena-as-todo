import React from 'react';
import {BrowserRouter,
    Switch,
    Route
} from 'react-router-dom';
import Registration from './components/Registration';
import ToDoNav from './components/ToDoNav';
import PaymentRefWrapper from './components/Payment/PaymentWrapper';

const ToDoRouter = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/payment'  component={PaymentRefWrapper}></Route>
                <Route path='/register' component={Registration}></Route>
                <Route path='/'         component={ToDoNav}></Route> 
            </Switch>
        </BrowserRouter>
    );
}

export default ToDoRouter;  

