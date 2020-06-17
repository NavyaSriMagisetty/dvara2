import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as HashRouter, Route } from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import './index.css';
import App from './App';
import Header from './header/header';
import * as serviceWorker from './serviceWorker';
import Create from './home/create';
import Home from './home/home'

ReactDOM.render(
  <HashRouter>
      <div>
        <Header/>
      </div>
      <div className="content">
        <Route path='/create' component={Create}/>
      <Route exact path='/' component={Home}/>
      </div>
  </HashRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();