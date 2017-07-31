// @flow
import { applyMiddleware, createStore, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import { intlReducer } from 'react-intl-redux';
import reducers from './reducers';

/* localisation */
import en from './assets/locales/en.json';
import fi from './assets/locales/fi.json';

const possibleLanguage = (navigator.languages && navigator.languages[0]) || navigator.language || navigator.userLanguage;
const stripRegionCode = possibleLanguage.toLowerCase().split(/[_-]+/)[0];
const locale = stripRegionCode || possibleLanguage || 'en';
const messages = { 'en': en, 'fi': fi };

const initialIntlState = {
  intl: {
    defaultLocale: locale,
    locale: locale,
    messages: messages[locale]
  }
};

const reducer = combineReducers({
  ...reducers,
  intl: intlReducer,
});

const middleware = applyMiddleware(thunk, createLogger());

export default createStore(reducer, initialIntlState, middleware);
