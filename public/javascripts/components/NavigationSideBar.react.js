var React = require('react');

var NavigationBar = React.createClass({
  render : function( ){
    return(
      <div className="android-drawer mdl-layout__drawer">
        <span className="mdl-layout-title">
          <img className="mp-logo-image" src="media/img/logo.png" />
        </span>
        <nav className="mdl-navigation">
          <a className="mdl-navigation__link" href="">Molecules</a>
          <a className="mdl-navigation__link" href="">Locations</a>
          <a className="mdl-navigation__link" href="">Set Up</a>
          <a className="mdl-navigation__link" href="">FAQ</a>
          <a className="mdl-navigation__link" href="">Sign Up</a>
          <a className="mdl-navigation__link" href="">Login</a>
          <div className="android-drawer-separator"></div>
          <span className="mdl-navigation__link" href="">Versions</span>
        </nav>
      </div>
    );
  }
});


module.exports = NavigationBar;
