const SET_AUTH_USER = "SET_AUTH_USER";


let initialState = {
    id: {},
    login: {},
    email: {},
    isAuth: false
}


const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_USER: {
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        }
        default: return state;
    }
}

export const setAuthUserId = (id, login, email) => ({ type: SET_AUTH_USER, data: { id, login, email } });


export default authReducer;