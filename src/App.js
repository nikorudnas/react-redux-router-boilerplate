import React, { Component } from 'react';
import './App.scss';
import Routes from './Routes';
import { IntlProvider } from 'react-intl';

class App extends Component {
  render() {
    return (
      <IntlProvider>
        <div className="Container">
          <Routes />
        </div>
      </IntlProvider>
    );
  }
}

export default App;
