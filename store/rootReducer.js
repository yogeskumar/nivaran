const initialState = {
    loggedIn: false,
    mobile: '',
}

const rootReducer = (state = initialState, action) => {
    if (action.type === 'LogIn') {
            console.log('data');
            return {
                ...state,
                mobile: action.mobile,
                loggedIn: true
            }
    }
    if (action.type === "InvalidUser") {
        console.log('invalid');
        return {
            ...state,
            loggedIn: false,
            mobile:'',
        }
    }
    return state;
}

export default rootReducer;