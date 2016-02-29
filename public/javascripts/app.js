var React = require('react');
var ReactDOM = require('react-dom');
var MolApp = require('./components/MolApp.react');
var LoginSection = require('./components/LoginSection.react');
var LandingComponent = require('./components/LandingComponent.react');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var IndexRoute = require('react-router').IndexRoute;
var browserHistory = require('react-router').browserHistory;
var IndexRoute = require('react-router').IndexRoute;

ReactDOM.render((
  <Router history ={browserHistory}>
    <Route path="/" component={MolApp}>
      <IndexRoute component={LandingComponent}/>
      <Route path="/login" component={LoginSection}/>
    </Route>
  </Router>
),document.getElementById('MolApp'));
