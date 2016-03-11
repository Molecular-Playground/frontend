var React = require('react');
var ReactDOM = require('react-dom');
var MolApp = require('./views/MolApp.react');
var LoginView = require('./views/LoginView.react');
var LandingView = require('./views/LandingView.react');
var MoleculesView = require('./views/MoleculesView.react');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var IndexRoute = require('react-router').IndexRoute;
var browserHistory = require('react-router').browserHistory;
var IndexRoute = require('react-router').IndexRoute;

ReactDOM.render((
  <Router history ={browserHistory}>
    <Route path="/" component={MolApp}>
      <IndexRoute component={LandingView}/>
      <Route path="/login" component={LoginView}/>
      <Route path="/molecules" component={MoleculesView}/>
    </Route>
  </Router>
),document.getElementById('MolApp'));
