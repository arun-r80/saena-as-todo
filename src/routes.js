import React from 'react';
import {BrowserRouter,
    Switch,
    Route
} from 'react-router-dom';
import Registration from './components/Registration';

const ToDoRouter = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route route='/' component={Registration}></Route>
            </Switch>
        </BrowserRouter>
    );


}

export default ToDoRouter;  

