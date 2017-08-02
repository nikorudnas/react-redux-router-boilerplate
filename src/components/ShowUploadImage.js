import React, { Component } from 'react';
import './css/ShowUploadImage.scss';

class ShowUploadImage extends Component {
    render() {

        return (
            <div>
                <img alt="Your pic" src={this.props.image} />
            </div>
        );
    }
}

export default ShowUploadImage;