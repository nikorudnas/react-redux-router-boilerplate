import React, { Component } from 'react';
import './css/ShowUploadImage.scss';

class ShowUploadImage extends Component {
    render() {
        /* When the 'image' prop gets data, render the image */
        return (
            <div>
                <img alt="Your pic" src={this.props.image} />
            </div>
        );
    }
}

export default ShowUploadImage;