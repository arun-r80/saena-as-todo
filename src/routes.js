import React from 'react';
import {BrowserRouter,
    Switch,
    Route
} from 'react-router-dom';
import Registration from './components/Registration';
import ToDoNav from './components/ToDoNav';
import PaymentRefWrapper from './components/Payment/PaymentWrapper'
import Payment2 from './components/Payment2';

const ToDoRouter = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/payment2' component={Payment2}></Route>
                <Route path='/payment'  component={PaymentRefWrapper}></Route>
                <Route path='/register' component={Registration}></Route>
                <Route path='/'         component={ToDoNav}></Route> 
            </Switch>
        </BrowserRouter>
    );
}

export default ToDoRouter;  

