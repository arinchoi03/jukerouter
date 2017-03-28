import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory, IndexRedirect } from 'react-router';

import AppContainer from './containers/AppContainer';
import Albums from './components/Albums'
import Album from './components/Album'

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path = "/" component= {AppContainer}>
      <Route path = "/albums" component = {Albums} />
      <Route path = "albums/:albumId" component= {Album} />
      <IndexRedirect to = "/albums" />
    </Route>
  </Router>,
  document.getElementById('app')
);

//IndexRedirect doesn't take components, rather it takes the route it redirects to
