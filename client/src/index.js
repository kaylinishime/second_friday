import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { Router, Route, browserHistory } from 'react-router';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';


ReactDOM.render((
    <Router history={browserHistory}>
        <Route path='/' component={App} />
    </Router>
    ), document.getElementById('root')
);
