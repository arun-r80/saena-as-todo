export const UPDATE_LOGIN = 'Update Login Status';

export const updateLoginStatus = (login) => {
    
     return ({
         type: UPDATE_LOGIN,
         payload: login
    });

}