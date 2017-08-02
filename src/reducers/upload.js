// @flow
export default function reducer(state = {
    isUploading: false,
    uploaded: false,
    message: null,
    isAuthenticated: localStorage.getItem('token') ? true : false,
    url: null,
    image: null
}, action) {
    switch (action.type) {
        case "UPLOADFILE_REQUEST":
            {
                return {
                    ...state,
                    isUploading: true,
                    uploaded: false,
                    message: null
                }
            }
        case "UPLOADFILE_REQUEST_FAILURE":
            {
                return {
                    ...state,
                    isUploading: false,
                    uploaded: false,
                    message: action.payload
                }
            }
        case "UPLOADFILE_REQUEST_SUCCESS":
            {
                return {
                    ...state,
                    isUploading: false,
                    uploaded: true,
                    message: null,
                    url: action.payload
                }
            }
        case "SETIMAGE":
            {
                return {
                    ...state,
                    isUploading: false,
                    uploaded: true,
                    message: null,
                    image: action.payload
                }
            }
        default:
            return state;
    }
}