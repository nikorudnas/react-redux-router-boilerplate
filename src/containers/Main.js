// @flow
import React, { Component } from 'react';
import store from '../store';
import logo from '../assets/medias/logo.svg';
import './css/Main.scss';
import NavBar from '../components/NavBar';
import RaisedButton from 'material-ui/RaisedButton';
import moment from 'moment'
import { addLocaleData, FormattedMessage } from 'react-intl';
import { IntlProvider } from 'react-intl-redux';
import { updateIntl } from 'react-intl-redux'

import enLocaleData from 'react-intl/locale-data/en';
import fiLocaleData from 'react-intl/locale-data/fi';
import en from '../assets/locales/en.json'
import fi from '../assets/locales/fi.json'

addLocaleData([...enLocaleData, ...fiLocaleData]);

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: localStorage.getItem("lang") === 'en' ? moment().format('MMMM Do YYYY, h:mm:ss a') : moment().format('DD/MM/YYYY, H:mm:ss')
    };
  }

  ChangeLang = () => {
    let currentLang = localStorage.getItem("lang");
    let locale = currentLang === 'fi' ? 'en' : 'fi';
    let messages = currentLang === 'fi' ? en : fi;
    store.dispatch(updateIntl({
      locale,
      messages
    }))
    currentLang === 'fi' ? localStorage.setItem('lang', 'en') : localStorage.setItem('lang', 'fi');
  }

  render() {
    return (
      <div>
        <NavBar history={this.props.history} />
        <IntlProvider>
          <div className="Main">
            <div className="Main-header">
              <img src={logo} className="Main-logo" alt="logo" />
              <h2>
                <FormattedMessage id="app.greeting" defaultMessage="You see this if intl is not working!" />
              </h2>
            </div>
            <p className="Main-intro">
              <FormattedMessage id="app.info" />
            </p>
            <RaisedButton label={<FormattedMessage id="app.languageButton" />} primary={true} onTouchTap={() => this.ChangeLang()} />
            <p>
              {this.state.time}
            </p>
          </div>
        </IntlProvider>
      </div>
    );
  }
}

export default Main;
