// @flow
import constants from '../assets/constants.js';

// Get quote
export function getQuote() {
    return dispatch => {
        dispatch(quoteRequest());
        // Return a promise with the fetch api
        return fetch(constants.SERVER_URL + '/api/quote', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        }).then(response => response.json()).then((responseJson) => {
            // Quote successful
            if (responseJson.success) {
                dispatch(quoteRequestSuccess(responseJson));
                // Return quote to the caller
                return responseJson.quote;

            } else if (!responseJson.success) {
                dispatch(quoteRequestError(responseJson));
                return false;

            }
        }).catch((error) => {
            dispatch(quoteRequestError({
                message: error.toString()
            }));
        });
    }
}

function quoteRequest() {
    return {
        type: "QUOTE_REQUEST"
    }
}

function quoteRequestError(data) {
    return {
        type: "QUOTE_REQUEST_FAILURE",
        payload: data.message
    }
}

function quoteRequestSuccess(data) {
    return {
        type: "QUOTE_REQUEST_SUCCESS",
        payload: data.quote
    }
}