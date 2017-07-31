import React, { Component } from 'react';
import './css/GetAuthQuote.scss';
import RaisedButton from 'material-ui/RaisedButton';
import CircularProgress from 'material-ui/CircularProgress';

const Error_Style = {
    color: 'red',
    fontSize: 14
};

class GetAuthQuote extends Component {
    render() {
        const Spinner = this.props.auth.isFetching
            ? <CircularProgress size={60} thickness={7} />
            : null;
        return (
            <div>
                <form className="AuthQuote-Form" onSubmit={this.getAuthQuote}>
                    <RaisedButton
                        style={{ marginTop: '20px' }}
                        secondary={true}
                        label="Get Auth Quote"
                        disabled={this.props.auth.isFetching}
                        type="submit" />
                    <br />
                    <br /> {Spinner}
                    <br />
                    <span style={Error_Style}>{this.props.auth.message}</span>
                </form>
            </div>
        );
    }
}

export default GetAuthQuote;