var React = require('react');
var ReactDOM = require('react-dom');

var ModelViewHolder = {
  padding: '0'
}

var logoStyle = {
  height: "54px",
  width: "auto",
  marginRight: "5px"
}

var navRowStyle = {
  backgroundColor: "white",
  color: "black"
}

var navLinksStyle = {
  color: "black"
}


var NavMenu = React.createClass({
  /**
   * @return {object}
   */
  render: function() {
      return (
        <div>
          <header className="mdl-layout__header">
            <div className="mdl-layout__header-row" style={navRowStyle}>
              <img src="../../media/img/logo.png" style={logoStyle}/>
              <span className="mdl-layout-title">The Molecular Playground</span>
              <div className="mdl-layout-spacer"></div>
              <nav className="mdl-navigation mdl-layout--large-screen-only">
                <a className="mdl-navigation__link" href="" style={navLinksStyle}>Link</a>
                <a className="mdl-navigation__link" href="" style={navLinksStyle}>Link</a>
                <a className="mdl-navigation__link" href="" style={navLinksStyle}>Link</a>
                <a className="mdl-navigation__link" href="" style={navLinksStyle}>Link</a>
              </nav>
            </div>
          </header>
          <div className="mdl-layout__drawer">
            <span className="mdl-layout-title">Title</span>
            <nav className="mdl-navigation">
              <a className="mdl-navigation__link" href="">Link</a>
              <a className="mdl-navigation__link" href="">Link</a>
              <a className="mdl-navigation__link" href="">Link</a>
              <a className="mdl-navigation__link" href="">Link</a>
            </nav>
          </div>
        </div>
      );
  },

});

module.exports = NavMenu;
