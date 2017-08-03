import React, { Component } from 'react';
import './css/RegisterForm.scss';
import RaisedButton from 'material-ui/RaisedButton';
import CircularProgress from 'material-ui/CircularProgress';

const Error_Style = {
    color: 'red',
    fontSize: 14
};

class FileUpload extends Component {

    uploadImage = (e) => {
        /* Get file from input */
        let file = document.getElementById("uploadFile").files[0];
        /* If a file was found, call function from prop with file as param */
        if (file) {
            this.props.uploadDocumentRequest(file).then((url) => {
                if (url) {
                    alert("Upload successful!");
                }
            });
        } else {
            alert("Please select a file first!");
        }
    }

    render() {
        /* Render spinner only when 'isFetching' is true */
        const Spinner = this.props.upload.isFetching
            ? <CircularProgress size={60} thickness={7} />
            : null;
        return (
            <div>
                <input type="file" id="uploadFile" />
                <br />
                <RaisedButton
                    style={{ marginTop: '20px' }}
                    primary={true}
                    label="Done"
                    disabled={this.props.upload.isFetching}
                    onTouchTap={this.uploadImage} />
                <br /> {Spinner}
                <br />
                <span style={Error_Style}>{this.props.upload.message}</span>
            </div>
        );
    }
}

export default FileUpload;