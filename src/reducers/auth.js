// @flow
export default function reducer(state = {
    isFetching: false,
    fetched: false,
    message: null,
    isAuthenticated: localStorage.getItem('token') ? true : false,
    user: null
}, action) {
    switch (action.type) {
        case "LOGIN_REQUEST":
            {
                return {
                    ...state,
                    isFetching: true,
                    fetched: false,
                    message: null,
                    isAuthenticated: false
                }
            }
        case "LOGIN_REQUEST_FAILURE":
            {
                return {
                    ...state,
                    isFetching: false,
                    fetched: false,
                    message: action.payload,
                    isAuthenticated: false
                }
            }
        case "LOGIN_REQUEST_SUCCESS":
            {
                return {
                    ...state,
                    isFetching: false,
                    fetched: true,
                    message: null,
                    isAuthenticated: true
                }
            }
        case "GETUSER_REQUEST":
            {
                return {
                    ...state,
                    isFetching: true,
                    fetched: false,
                    message: null
                }
            }
        case "GETUSER_REQUEST_FAILURE":
            {
                return {
                    ...state,
                    isFetching: false,
                    fetched: false,
                    message: action.payload
                }
            }
        case "GETUSER_REQUEST_SUCCESS":
            {
                return {
                    ...state,
                    isFetching: false,
                    fetched: true,
                    message: null,
                    user: action.payload
                }
            }
        case "LOGOUT":
            {
                return {
                    ...state,
                    isFetching: false,
                    fetched: true,
                    message: null,
                    isAuthenticated: false
                }
            }
        case "EDITUSER_REQUEST":
            {
                return {
                    ...state,
                    isFetching: true,
                    fetched: false,
                    message: null
                }
            }
        case "EDITUSER_REQUEST_FAILURE":
            {
                return {
                    ...state,
                    isFetching: false,
                    fetched: false,
                    message: action.payload
                }
            }
        case "EDITUSER_REQUEST_SUCCESS":
            {
                return {
                    ...state,
                    isFetching: false,
                    fetched: true,
                    message: null,
                    user: action.payload
                }
            }
        default:
            return state;
    }
}