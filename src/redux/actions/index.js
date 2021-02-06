export const UPDATE_LOGIN = 'Update Login Status';

export const updateLoginStatus = (login) => {
    console.log("Action called", login);
     return ({
         type: UPDATE_LOGIN,
         payload: login
    });

}