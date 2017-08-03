import React, { Component } from 'react';
import './css/RegisterForm.scss';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import CircularProgress from 'material-ui/CircularProgress';

const Error_Style = {
    color: 'red',
    fontSize: 14
};

class LoginForm extends Component {

    /* Get creds from the form and pass them as params to action */
    handleLogin = (e) => {
        e.preventDefault();
        let creds = {
            'username': this.refs.username.getValue(),
            'password': this.refs.password.getValue()
        };
        this.props.loginUser(creds).then((passed) => {
            if (passed) {
                alert("You are now logged in!");
            }
        });
    }

    logOut = () => {
        this.props.logoutUser();
        alert("You are now logged out!");
    };

    render() {
        /* Render spinner only when 'isFetching' is true */
        const Spinner = this.props.auth.isFetching
            ? <CircularProgress size={60} thickness={7} />
            : null;
        return (
            <div>
                <form className="Login-Form" onSubmit={this.handleLogin}>
                    <TextField
                        hintText="Username Field"
                        floatingLabelText="Username"
                        ref="username" />
                    <br />
                    <TextField
                        hintText="Password Field"
                        floatingLabelText="Password"
                        type="password"
                        ref="password" />
                    <br />
                    <RaisedButton
                        style={{ marginTop: '20px' }}
                        primary={true}
                        label="Login"
                        disabled={this.props.auth.isFetching}
                        type="submit" />
                    <br />
                    <RaisedButton
                        style={{ marginTop: '20px' }}
                        secondary={true}
                        label="Logout"
                        disabled={this.props.auth.isFetching}
                        onTouchTap={this.logOut} />
                    <br />
                    <br /> {Spinner}
                    <br />
                    <span style={Error_Style}>{this.props.auth.message}</span>
                </form>
            </div>
        );
    }
}

export default LoginForm;