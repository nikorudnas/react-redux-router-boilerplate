import React, { Component } from 'react';
import './css/RegisterForm.scss';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import CircularProgress from 'material-ui/CircularProgress';

const Error_Style = {
    color: 'red',
    fontSize: 14
};

class RegisterForm extends Component {

    /* Get creds from the form and pass them as params to action */
    handleRegister = (e) => {
        e.preventDefault();
        let creds = {
            'username': this.refs.username.getValue(),
            'password': this.refs.password.getValue()
        };
        this.props.registerUser(creds).then((passed) => {
            if (passed) {
                alert("Register successful! You can now log in :)");
            }
        });;
    }

    render() {
        /* Render spinner only when 'isFetching' is true */
        const Spinner = this.props.register.isFetching
            ? <CircularProgress size={60} thickness={7} />
            : null;
        return (
            <div>
                <form className="Register-Form" onSubmit={this.handleRegister}>
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
                        label="Register"
                        disabled={this.props.register.isFetching}
                        type="submit" />
                    <br />
                    <br /> {Spinner}
                    <br />
                    <span style={Error_Style}>{this.props.register.message}</span>
                </form>
            </div>
        );
    }
}

export default RegisterForm;