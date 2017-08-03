// @flow
import React, { Component } from 'react';
import './css/PageNotFound.scss';

class PageNotFound extends Component {

    componentDidMount() {
        /* After 1.5s redirect back to root path */
        setInterval(() => {
            this.props.history.push('/');
        }, 1500);
    }

    render() {
        return (
            <div className="PageNotFound">
                <label>404, Sorry nothing here...</label>
            </div>
        );
    }
}

export default PageNotFound;
