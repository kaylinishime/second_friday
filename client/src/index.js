import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Signin from './components/auth/signin';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import './index.css';
import { Router, Route, browserHistory } from 'react-router';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import reduxThunk from 'redux-thunk';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);

ReactDOM.render((
    <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory}>
        <Route path='/' component={App} />
        <Route path='signin' component={Signin} />
    </Router>
    </Provider>
    ), document.getElementById('root')
);
