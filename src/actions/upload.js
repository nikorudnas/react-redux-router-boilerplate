// @flow
import constants from '../assets/constants.js';

// Upload
export function uploadDocumentRequest(file) {
    let data = new FormData();
    data.append('file', file);
    // Return a promise with the fetch api
    // The file goes in body and token in header
    return dispatch => {
        dispatch(uploadFileRequest(data));
        return fetch(constants.SERVER_URL + '/api/upload', {
            method: 'POST',
            headers: {
                'x-access-token': localStorage.getItem('token')
            },
            body: data
        }).then(response => response.json()).then((responseJson) => {
            // Upload successful
            if (responseJson.success) {
                dispatch(uploadFileRequestSuccess(responseJson.url));
                // The image comes with the response as Base-64 encrypted data.
                // But it's ok we can directly set it to the img src attribute
                dispatch(setImage(responseJson.image));
                return true;

            } else if (!responseJson.success) {
                dispatch(uploadFileRequestError(responseJson));
                return false;

            }
        }).catch((error) => {
            dispatch(uploadFileRequestError({
                message: error.toString()
            }));
        });
    }
}

function uploadFileRequest(data) {
    return {
        type: "UPLOADFILE_REQUEST",
        data
    }
}

function uploadFileRequestError(data) {
    return {
        type: "UPLOADFILE_REQUEST_FAILURE",
        payload: data.message
    }
}

function uploadFileRequestSuccess(data) {
    return {
        type: "UPLOADFILE_REQUEST_SUCCESS",
        payload: data
    }
}

function setImage(data) {
    return {
        type: "SETIMAGE",
        payload: data
    }
}