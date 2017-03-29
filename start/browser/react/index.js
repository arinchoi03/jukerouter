import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory, IndexRedirect } from 'react-router';
//hashHistory vs browserHistory

import AppContainer from './containers/AppContainer';
import Albums from './components/Albums'
import Album from './components/Album'
import Artists from './components/Artists'
import Artist from './components/Artist'
import Songs from './components/Songs'

const NotFound = () => (
  <h1>404..This page is not found!</h1>)

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path = "/" component= {AppContainer}>
      <Route path = "/albums" component = {Albums} />
      <Route path = "albums/:albumId" component= {Album} />
      <Route path = "/artists" component = {Artists} />
      <Route path = "/artists/:artistId" component = {Artist}>
        <Route path = 'albums' component = {Albums} />
        <Route path = 'songs' component = {Songs} />
      </Route>
      <IndexRedirect to = "/albums" />
    </Route>
    <Route path='*' component= {NotFound}/>
  </Router>,
  document.getElementById('app')
);

// IndexRedirect doesn't take components, rather it takes the route it redirects to
// Instead of making a new component for selected Album, reusing the Album component (setting props.albums = selected artist's albums)
