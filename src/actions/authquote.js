// @flow
import constants from '../assets/constants.js';

// Get quote
export function getAuthQuote(token) {
    return dispatch => {
        dispatch(authquoteRequest());
        // Return a promise with the fetch api
        // Remember here to pass the token with header since this is auth route
        return fetch(constants.SERVER_URL + '/api/authquote', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'x-access-token': token
            }
        }).then(response => response.json()).then((responseJson) => {
            // Auth quote successful
            if (responseJson.success) {
                dispatch(authquoteRequestSuccess(responseJson));
                // Return quote to the caller
                return responseJson.authquote;

            } else if (!responseJson.success) {
                dispatch(authquoteRequestError(responseJson));
                return false;

            }
        }).catch((error) => {
            dispatch(authquoteRequestError({
                message: error.toString()
            }));
        });
    }
}

function authquoteRequest() {
    return {
        type: "AUTHQUOTE_REQUEST"
    }
}

function authquoteRequestError(data) {
    return {
        type: "AUTHQUOTE_REQUEST_FAILURE",
        payload: data.message
    }
}

function authquoteRequestSuccess(data) {
    return {
        type: "AUTHQUOTE_REQUEST_SUCCESS",
        payload: data.quote
    }
}