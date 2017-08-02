// @flow
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as authActions from '../actions/auth';
import * as uploadActions from '../actions/upload';
import './css/Upload.scss';
import NavBar from '../components/NavBar';
import LoginForm from '../components/LoginForm';
import FileUpload from '../components/FileUpload';
import ShowUploadImage from '../components/ShowUploadImage';
import '../assets/constants.js';

class Upload extends Component {
    render() {
        return (
            <div>
                <NavBar history={this.props.history} />
                <h1 className="Title">Upload example</h1>
                <div className="Upload">
                    <div className="items">
                        <h1>Login</h1>
                        <LoginForm auth={this.props.auth} loginUser={this.props.loginUser} logoutUser={this.props.logoutUser} />
                    </div>
                    <div className="items">
                        <h1>Select image</h1>
                        <FileUpload upload={this.props.upload} uploadDocumentRequest={this.props.uploadDocumentRequest} />
                    </div>
                    <div className="items">
                        <h1>Your uploaded image</h1>
                        <ShowUploadImage image={this.props.upload.image} />
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({ auth: state.auth, upload: state.upload });

const mapDispatchToProps = (dispatch) => (bindActionCreators(Object.assign(authActions, uploadActions), dispatch));

export default connect(mapStateToProps, mapDispatchToProps)(Upload);
