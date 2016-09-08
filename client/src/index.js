import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, browserHistory } from 'react-router';
import reduxThunk from 'redux-thunk';

import App from './components/App';
import reducers from './reducers';
import Signin from './components/auth/signin';

import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';



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
