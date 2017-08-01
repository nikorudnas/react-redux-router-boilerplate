// @flow
import constants from '../assets/constants.js';

// Register
export function registerUser(credentials) {
    return dispatch => {
        dispatch(registerRequest());

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
                // Add token to local storage

                // Lets not do this automatically here
                //localStorage.setItem('token', responseJson.token);

                dispatch(registerRequestSuccess());
            } else if (!responseJson.success) {
                dispatch(registerRequestError(responseJson));
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