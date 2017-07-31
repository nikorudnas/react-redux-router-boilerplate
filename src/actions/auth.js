// @flow
import constants from '../assets/constants.js';

// Login
export function loginUser(credentials) {
    return dispatch => {
        dispatch(loginRequest());

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
            } else if (!responseJson.success) {
                dispatch(loginRequestError(responseJson));
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

// Fetch user data
export function getUserData(token) {
    return dispatch => {
        dispatch(getUserRequest());

        return fetch(constants.SERVER_URL + '/api/user', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                token: token
            })
        }).then(response => response.json()).then((responseJson) => {
            // User found successful
            if (responseJson.success) {
                dispatch(getUserRequestSuccess(responseJson.user));
            } else if (!responseJson.success) {
                dispatch(getUserRequestError(responseJson));
            }
        }).catch((error) => {
            dispatch(getUserRequestError({
                message: error.toString()
            }));
        });
    }
}

function getUserRequest() {
    return {
        type: "GETUSER_REQUEST"
    }
}

function getUserRequestError(data) {
    return {
        type: "GETUSER_REQUEST_FAILURE",
        payload: data.message
    }
}

function getUserRequestSuccess(data) {
    return {
        type: "GETUSER_REQUEST_SUCCESS",
        payload: data
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

// Edit user info
export function editUser(token, form) {
    return dispatch => {
        dispatch(editUserRequest());

        return fetch(constants.SERVER_URL + '/api/edituser', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                token: token,
                user: form
            })
        }).then(response => response.json()).then((responseJson) => {
            // Change completed
            if (responseJson.success) {
                dispatch(editUserRequestSuccess(responseJson.user));
                return true;
            } else if (!responseJson.success) {
                dispatch(editUserRequestError(responseJson));
                return false;
            }
        }).catch((error) => {
            dispatch(editUserRequestError({
                message: error.toString()
            }));
        });
    }
}

function editUserRequest() {
    return {
        type: "EDITUSER_REQUEST"
    }
}

function editUserRequestError(data) {
    return {
        type: "EDITUSER_REQUEST_FAILURE",
        payload: data.message
    }
}

function editUserRequestSuccess(data) {
    return {
        type: "EDITUSER_REQUEST_SUCCESS",
        payload: data
    }
}