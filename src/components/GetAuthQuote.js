import React, { Component } from 'react';
import './css/GetAuthQuote.scss';
import RaisedButton from 'material-ui/RaisedButton';
import CircularProgress from 'material-ui/CircularProgress';

const Error_Style = {
    color: 'red',
    fontSize: 14
};

class GetAuthQuote extends Component {

    getAuthQuote = (e) => {
        e.preventDefault();
        if (localStorage.getItem('token')) {
            this.props.getAuthQuote(localStorage.getItem('token')).then((authquote) => {
                if (authquote) {
                    alert(authquote);
                }
            });
        }
        else {
            alert("Please log in first!");
        }
    }

    render() {
        const Spinner = this.props.authquote.isFetching
            ? <CircularProgress size={60} thickness={7} />
            : null;
        return (
            <div>
                <form className="AuthQuote-Form" onSubmit={this.getAuthQuote}>
                    <RaisedButton
                        style={{ marginTop: '20px' }}
                        secondary={true}
                        label="Get Auth Quote"
                        disabled={this.props.authquote.isFetching}
                        type="submit" />
                    <br />
                    <br /> {Spinner}
                    <br />
                    <span style={Error_Style}>{this.props.authquote.message}</span>
                </form>
            </div>
        );
    }
}

export default GetAuthQuote;