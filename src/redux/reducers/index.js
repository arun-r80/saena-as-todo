import {UPDATE_LOGIN} from '../actions';

export const systemReducer = (state={login: false},action)=> {
   switch(action.type){
     case UPDATE_LOGIN:
         return({
            ...state,
            login: action.payload
         }) 
        break;
     default:
         return(state)
   }
}