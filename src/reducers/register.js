// @flow
export default function reducer(state = {
    isFetching: false,
    fetched: false,
    message: null,
}, action) {
    switch (action.type) {
        case "REGISTER_REQUEST":
            {
                return {
                    ...state,
                    isFetching: true,
                    fetched: false,
                    message: null
                }
            }
        case "REGISTER_REQUEST_FAILURE":
            {
                return {
                    ...state,
                    isFetching: false,
                    fetched: false,
                    message: action.payload
                }
            }
        case "REGISTER_REQUEST_SUCCESS":
            {
                return {
                    ...state,
                    isFetching: false,
                    fetched: true,
                    message: null
                }
            }
        default:
            return state;
    }
}