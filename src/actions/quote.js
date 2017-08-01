// @flow
import constants from '../assets/constants.js';

// Get quote
export function getQuote() {
    return dispatch => {
        dispatch(quoteRequest());

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
            } else if (!responseJson.success) {
                dispatch(quoteRequestError(responseJson));
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