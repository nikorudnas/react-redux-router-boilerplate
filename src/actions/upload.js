// @flow
import constants from '../assets/constants.js';

// Upload
export function uploadDocumentRequest(file) {
    let data = new FormData();
    data.append('file', file);
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