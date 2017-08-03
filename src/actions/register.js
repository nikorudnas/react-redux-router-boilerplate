// @flow
import constants from '../assets/constants.js';

// Register
export function registerUser(credentials) {
    return dispatch => {
        dispatch(registerRequest());
        // Return a promise with the fetch api
        return fetch(constants.SERVER_URL + '/api/register', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: credentials.username,
                password: credentials.password
            })
        }).then(response => response.json()).then((responseJson) => {
            // Register successful
            if (responseJson.success) {
                // You can automatically log in after register complete
                //localStorage.setItem('token', responseJson.token);
                dispatch(registerRequestSuccess());
                return true;

            } else if (!responseJson.success) {
                dispatch(registerRequestError(responseJson));
                return false;

            }
        }).catch((error) => {
            dispatch(registerRequestError({
                message: error.toString()
            }));
        });
    }
}

function registerRequest() {
    return {
        type: "REGISTER_REQUEST"
    }
}

function registerRequestError(data) {
    return {
        type: "REGISTER_REQUEST_FAILURE",
        payload: data.message
    }
}

function registerRequestSuccess() {
    return {
        type: "REGISTER_REQUEST_SUCCESS"
    }
}