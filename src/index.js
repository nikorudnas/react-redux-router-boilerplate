import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'normalize.css';

// Material-UI
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

ReactDOM.render(
    <MuiThemeProvider>
        <Provider store={store}>
            <Router>
                <App />
            </Router>
        </Provider>
    </MuiThemeProvider>,
    document.getElementById('root'));
registerServiceWorker();
