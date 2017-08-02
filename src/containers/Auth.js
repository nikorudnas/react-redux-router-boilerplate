// @flow
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as authActions from '../actions/auth';
import * as registerActions from '../actions/register';
import * as quoteActions from '../actions/quote';
import * as authquoteActions from '../actions/authquote';
import './css/Auth.scss';
import NavBar from '../components/NavBar';
import RegisterForm from '../components/RegisterForm';
import LoginForm from '../components/LoginForm';
import GetQuote from '../components/GetQuote';
import GetAuthQuote from '../components/GetAuthQuote';
import '../assets/constants.js';

class Auth extends Component {
    render() {
        return (
            <div>
                <NavBar history={this.props.history} />
                <h1 className="Title">Auth examples</h1>
                <div className="Auth">
                    <div className="items">
                        <h1>Register example</h1>
                        <RegisterForm register={this.props.register} registerUser={this.props.registerUser} />
                    </div>
                    <div className="items">
                        <h1>Login example</h1>
                        <LoginForm auth={this.props.auth} loginUser={this.props.loginUser} logoutUser={this.props.logoutUser} />
                    </div>
                    <div className="items">
                        <h1>Query example</h1>
                        <GetQuote quote={this.props.quote} getQuote={this.props.getQuote} />
                    </div>
                    <div className="items">
                        <h1>Auth query example</h1>
                        <GetAuthQuote authquote={this.props.authquote} getAuthQuote={this.props.getAuthQuote} />
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({ auth: state.auth, register: state.register, quote: state.quote, authquote: state.authquote });

const mapDispatchToProps = (dispatch) => (bindActionCreators(Object.assign(authActions, registerActions, quoteActions, authquoteActions), dispatch));

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
