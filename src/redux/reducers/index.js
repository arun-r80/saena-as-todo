import {UPDATE_LOGIN, ADD_BAMBORA_RESPONSE} from '../actions';

export const systemReducer = (state={login: false},action)=> {
   switch(action.type){
     case UPDATE_LOGIN:
         return({
            ...state,
            login: action.payload
         }) 
        break;
      case ADD_BAMBORA_RESPONSE: 
       return({
          ...state, 
          bb: action.payload
       })
     default:
         return(state)
   }
}