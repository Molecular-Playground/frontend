var React = require('react');

var NavigationBar = React.createClass({
  render : function( ){
    return(
        <div className="android-header mdl-layout__header mdl-layout__header--waterfall">
          <div className="mdl-layout__header-row">
            <span className="android-title mdl-layout-title">
              <img className="mp-logo-image" src="media/img/logo.png" />
            </span>
            <div className="android-header-spacer mdl-layout-spacer"></div>
            <div className="android-search-box mdl-textfield mdl-js-textfield mdl-textfield--expandable mdl-textfield--floating-label mdl-textfield--align-right mdl-textfield--full-width">
              <label className="mdl-button mdl-js-button mdl-button--icon" htmlFor="search-field">
                <i className="material-icons">search</i>
              </label>
              <div className="mdl-textfield__expandable-holder">
                <input className="mdl-textfield__input" type="text" id="search-field" />
              </div>
            </div>

            <div className="android-navigation-container">
              <nav className="android-navigation mdl-navigation">
                <a className="mdl-navigation__link mdl-typography--text-uppercase" href="molecules.html">Molecules</a>
                <a className="mdl-navigation__link mdl-typography--text-uppercase" href="">Locations</a>
                <a className="mdl-navigation__link mdl-typography--text-uppercase" href="">Set Up</a>
                <a className="mdl-navigation__link mdl-typography--text-uppercase" href="">FAQ</a>
                <a className="mdl-navigation__link mdl-typography--text-uppercase" href="">Login</a>
                <a className="mdl-navigation__link mdl-typography--text-uppercase" href="">Sign Up</a>
              </nav>
            </div>
            <span className="android-mobile-title mdl-layout-title">
              <img className="mp-logo-image" src="media/img/logo.png" />
            </span>
            <button className="android-more-button mdl-button mdl-js-button mdl-button--icon mdl-js-ripple-effect" id="more-button">
              <i className="material-icons">more_vert</i>
            </button>
            <ul className="mdl-menu mdl-js-menu mdl-menu--bottom-right mdl-js-ripple-effect" htmlFor="more-button">
              <li className="mdl-menu__item">5.0 Lollipop</li>
            </ul>
          </div>
        </div>
    );
  }
});


module.exports = NavigationBar;
