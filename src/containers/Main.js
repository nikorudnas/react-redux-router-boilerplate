import React, { Component } from 'react';
import logo from '../utils/medias/logo.svg';
import './css/Main.scss';
import NavBar from '../components/NavBar';

class Main extends Component {
  render() {
    return (
      <div>
        <NavBar history={this.props.history} />
        <div className="Main">
          <div className="Main-header">
            <img src={logo} className="Main-logo" alt="logo" />
            <h2>Welcome to React</h2>
          </div>
          <p className="Main-intro">
            To get started, edit <code>src/containers/Main.js</code> and save to reload.
        </p>
        </div>
      </div>
    );
  }
}

export default Main;
