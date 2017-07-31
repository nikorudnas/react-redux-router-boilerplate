// @flow
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as authActions from '../actions/auth';
import './css/Auth.scss';
import NavBar from '../components/NavBar';
import RegisterForm from '../components/RegisterForm';
import LoginForm from '../components/LoginForm';
import GetQuote from '../components/GetQuote';
import GetAuthQuote from '../components/GetAuthQuote';
import '../assets/constants.js';

class Auth extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        };
    }
    render() {
        return (
            <div>
                <NavBar history={this.props.history} />
                <h1 className="Title">Auth examples</h1>
                <div className="Auth">
                    <div id="Register">
                        <h1>Register example</h1>
                        <RegisterForm auth={this.props.auth} />
                    </div>
                    <div id="Login">
                        <h1>Login example</h1>
                        <LoginForm auth={this.props.auth} />
                    </div>
                    <div id="Normal_Query">
                        <h1>Query example</h1>
                        <GetQuote auth={this.props.auth} />
                    </div>
                    <div id="Auth_Query">
                        <h1>Auth query example</h1>
                        <GetAuthQuote auth={this.props.auth} />
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({ auth: state.auth });

const mapDispatchToProps = (dispatch) => (bindActionCreators(authActions, dispatch));

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
