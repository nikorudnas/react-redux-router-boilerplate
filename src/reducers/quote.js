// @flow
export default function reducer(state = {
    isFetching: false,
    fetched: false,
    message: null,
    quote: null
}, action) {
    switch (action.type) {
        case "QUOTE_REQUEST":
            {
                return {
                    ...state,
                    isFetching: true,
                    fetched: false,
                    message: null
                }
            }
        case "QUOTE_REQUEST_FAILURE":
            {
                return {
                    ...state,
                    isFetching: false,
                    fetched: false,
                    message: action.payload
                }
            }
        case "QUOTE_REQUEST_SUCCESS":
            {
                return {
                    ...state,
                    isFetching: false,
                    fetched: true,
                    message: null,
                    quote: action.payload
                }
            }
        default:
            return state;
    }
}