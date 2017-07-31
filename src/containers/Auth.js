// @flow
import React, { Component } from 'react';
import './css/Auth.scss';
import NavBar from '../components/NavBar';
import '../assets/constants.js';

class Auth extends Component {
    render() {
        return (
            <div>
                <NavBar history={this.props.history} />
                <div className="Auth">
                    <label>AUTH</label>
                </div>
            </div>
        );
    }
}

export default Auth;
