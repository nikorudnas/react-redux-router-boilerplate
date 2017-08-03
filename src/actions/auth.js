// @flow
import constants from '../assets/constants.js';

// Login
export function loginUser(credentials) {
    return dispatch => {
        dispatch(loginRequest());
        // Return a promise with the fetch api
        return fetch(constants.SERVER_URL + '/api/login', {
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
            // Login successful
            if (responseJson.success) {
                // Add token to local storage
                localStorage.setItem('token', responseJson.token);
                dispatch(loginRequestSuccess());
                return true;

            } else if (!responseJson.success) {
                dispatch(loginRequestError(responseJson));
                return false;

            }
        }).catch((error) => {
            dispatch(loginRequestError({
                message: error.toString()
            }));
        });
    }
}

function loginRequest() {
    return {
        type: "LOGIN_REQUEST"
    }
}

function loginRequestError(data) {
    return {
        type: "LOGIN_REQUEST_FAILURE",
        payload: data.message
    }
}

function loginRequestSuccess() {
    return {
        type: "LOGIN_REQUEST_SUCCESS"
    }
}

// Logout
export function logoutUser() {
    return dispatch => {
        // Remove token from storage
        localStorage.removeItem('token');
        dispatch(logout());
    }
}

function logout() {
    return {
        type: "LOGOUT"
    }
}