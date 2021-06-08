import {systemReducer} from './reducers';
import {combineReducers} from 'redux';
import {configureStore} from 'react-redux';
import {createStore} from 'redux';
import {reducer as formReducer}  from 'redux-form';

const rootreducer = combineReducers({
      systemReducer,
      form: formReducer
})

export const store = createStore(rootreducer); 

export type RootStore = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default rootreducer;