var React = require('react');

var Footer = React.createClass({
  render : function( ){
    return(
      <footer className="android-footer mdl-mega-footer">
        <div className="mdl-mega-footer--top-section">
          <div className="mdl-mega-footer--left-section">
            <button className="mdl-mega-footer--social-btn"></button>
            &nbsp;
            <button className="mdl-mega-footer--social-btn"></button>
            &nbsp;
            <button className="mdl-mega-footer--social-btn"></button>
          </div>
          <div className="mdl-mega-footer--right-section">
            <a className="mdl-typography--font-light" href="#top">
              Back to Top
              <i className="material-icons">expand_less</i>
            </a>
          </div>
        </div>

        <div className="mdl-mega-footer--middle-section">
          <p className="mdl-typography--font-light">
            © 2016
            <br />
            <br />

            CREATORS:
            <a href="http://people.chem.umass.edu/cmartin/" target="_blank" className="android-link">Craig T. Martin</a>, Chemistry |
            <a href="http://people.cs.umass.edu/~apw/" target="_blank" className="android-link">Adam Williams</a>, Computer Science |
            <a href="http://www.umass.edu/molvis/martz/" target="_blank" className="android-link">Eric Martz</a>, Microbiology |
            <a href="http://vis-www.cs.umass.edu/~hanson/home.html" target="_blank" className="android-link">Allen Hanson</a>, Computer Science
            <br />
            <a href="http://www.umass.edu" target="_blank" className="android-link">University of Massachusetts Amherst</a>
            <br /><br />
            CONTACT: <a href="mailto:cmartin@chem.umass.edu" className="android-link"> cmartin@chem.umass.edu</a> </p>
        </div>

        <div className="mdl-mega-footer--bottom-section">
          <a className="android-link android-link-menu mdl-typography--font-light" id="version-dropdown">
            Versions
            <i className="material-icons">arrow_drop_up</i>
          </a>
          <ul className="mdl-menu mdl-js-menu mdl-menu--top-left mdl-js-ripple-effect" htmlFor="version-dropdown">
            <li className="mdl-menu__item">5.0 Lollipop</li>
            <li className="mdl-menu__item">4.4 KitKat</li>
            <li className="mdl-menu__item">4.3 Jelly Bean</li>
            <li className="mdl-menu__item">Android History</li>
          </ul>
          <a className="android-link android-link-menu mdl-typography--font-light" id="developers-dropdown">
            For Developers
            <i className="material-icons">arrow_drop_up</i>
          </a>
          <ul className="mdl-menu mdl-js-menu mdl-menu--top-left mdl-js-ripple-effect" htmlFor="developers-dropdown">
            <li className="mdl-menu__item">App developer resources</li>
            <li className="mdl-menu__item">Android Open Source Project</li>
            <li className="mdl-menu__item">Android SDK</li>
            <li className="mdl-menu__item">Android for Work</li>
          </ul>
          <a className="android-link mdl-typography--font-light" href="">Blog</a>
          <a className="android-link mdl-typography--font-light" href="">Privacy Policy</a>
        </div>

      </footer>
    );
  }
});


module.exports = Footer;
