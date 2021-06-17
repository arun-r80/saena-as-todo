export const UPDATE_LOGIN = 'Update Login Status';
export const ADD_BAMBORA_RESPONSE = "Add Bambora response"

export const updateLoginStatus = (login) => {
    
     return ({
         type: UPDATE_LOGIN,
         payload: login
    });

}

export const addBamboraResult = (result) => {

    return ({
        type: ADD_BAMBORA_RESPONSE,
        payload: result
    })
}