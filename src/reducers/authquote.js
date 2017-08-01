// @flow
export default function reducer(state = {
    isFetching: false,
    fetched: false,
    message: null,
    authquote: null
}, action) {
    switch (action.type) {
        case "AUTHQUOTE_REQUEST":
            {
                return {
                    ...state,
                    isFetching: true,
                    fetched: false,
                    message: null
                }
            }
        case "AUTHQUOTE_REQUEST_FAILURE":
            {
                return {
                    ...state,
                    isFetching: false,
                    fetched: false,
                    message: action.payload
                }
            }
        case "AUTHQUOTE_REQUEST_SUCCESS":
            {
                return {
                    ...state,
                    isFetching: false,
                    fetched: true,
                    message: null,
                    authquote: action.payload
                }
            }
        default:
            return state;
    }
}