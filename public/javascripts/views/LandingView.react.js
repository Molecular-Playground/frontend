var React = require('react');
var ReactPropTypes = React.PropTypes;

var LandingComponent = React.createClass({
  render : function( ){
    return(
      <div>
        <a name="top"></a>
        <div className="android-be-together-section mdl-typography--text-center">
          <div className="logo-font android-slogan">play. learn. be inspired.</div>
          <div className="logo-font android-sub-slogan">welcome to molecular playground... come see how beautiful molecules really are.</div>

        </div>
        <div className="android-screen-section mdl-typography--text-center">
          <a name="screens"></a>
          <div className="android-screen-section-text">
          <div className="mdl-typography--display-1-color-contrast">Molecules are beautiful, too!</div>


            <p className="mdl-typography--font-light">
              <a href="http://people.chem.umass.edu/cmartin/Jmol/IntroToMolecules/" target="_blank" className="android-link">The molecular aspects of nature</a> are too often viewed as inaccessible and uninteresting to the general public. While the public can appreciate the beauty of a flower or a swan, the molecular basis of these organisms goes unnoticed. While scientists appreciate the awe-inspiring beauty of both small and macromolecules, this is rarely communicated to the public. Consequently, the public sees molecular science as something removed from their everyday life. Even worse, much of the public associates 'chemicals' with toxins and pollution.
              <br /></p>
              <div className="mdl-typography--display-1-color-contrast">Beyond the microscope</div><p>
              With support from the Camille and Henry Dreyfus Foundation and the College of Natural Sciences at the University of Massachusetts Amherst and its supporters and alumni, this project has developed a system for displaying large-scale interactive molecules in prominent public spaces. The first such system was installed in the new Integrated Sciences Building on campus (see Current Installations for others). The aim is to capture the public's attention and to prod individuals to explore personally a vast array of molecular structures in a human-size "molecular playground," as shown in the movie below.
              <br />
              <a href="" className="android-link mdl-typography--font-light">Find a current installation near you</a>
            </p>
          </div>


        <div className="molplay-screen-section-dark mdl-typography--text-center">
          <a name="screens"></a>
          <div className="molplay-screen-section-dark-text">
          <div className="mdl-typography--display-2 mdl-typography--font-thin">Accessible to anyone</div>

            <p className="mdl-typography mdl-typography--font-thin">
              The presentations are targeted primarily to the nonscientist, focusing on the symmetry and beauty of molecules, large and small. Natural small molecule cofactors or life saving drugs are placed into larger ribbon view protein structures, for example, to illustrate their functional synergy. Authors strive for art-like presentations, while remaining true to the underlying chemistry. Animation, even in the absence of user interaction, is key. <a href="" className="android-alt-link">Help is available for those interested in authoring new presentations.</a>
              <br />
            </p>
              <a className="mdl-typography--font-regular mdl-typography--text-uppercase android-alt-link" href="">
                  Browse through our collection of molecules<i className="material-icons">chevron_right</i>
                </a>
          </div>
        </div>

        <div className="android-customized-section">
          <div className="android-customized-section-text">
            <div className="mdl-typography--font-light mdl-typography--display-1-color-contrast">Getting Started</div>
            <p className="mdl-typography--font-light">
              Would you like to install your own Molecular Playground? Visit our installation instructions page and then <a href="" className="android-link">contact us</a> through the links to the left.
              <br />
              <a href="" className="android-link mdl-typography--font-light">Install a Playground</a>
            </p>
          </div>
        </div>

        <div className="android-more-section">
          <div className="android-section-title mdl-typography--display-1-color-contrast">More schtuff here</div>
          <div className="android-card-container mdl-grid">
            <div className="mdl-cell mdl-cell--3-col mdl-cell--4-col-tablet mdl-cell--4-col-phone mdl-card mdl-shadow--3dp">
              <div className="mdl-card__media">
                <img src="images/more-from-1.png" />
              </div>
              <div className="mdl-card__title">
                 <h4 className="mdl-card__title-text">Some dude with glasses</h4>
              </div>
              <div className="mdl-card__supporting-text">
                <span className="mdl-typography--font-light mdl-typography--subhead">Four tips to make your switch to Android quick and easy</span>
              </div>
              <div className="mdl-card__actions">
                 <a className="android-link mdl-button mdl-js-button mdl-typography--text-uppercase" href="">
                   Make the switch
                   <i className="material-icons">chevron_right</i>
                 </a>
              </div>
            </div>

            <div className="mdl-cell mdl-cell--3-col mdl-cell--4-col-tablet mdl-cell--4-col-phone mdl-card mdl-shadow--3dp">
              <div className="mdl-card__media">
                <img src="images/more-from-4.png" />
              </div>
              <div className="mdl-card__title">
                 <h4 className="mdl-card__title-text">"Doesn't she look like me?"</h4>
              </div>
              <div className="mdl-card__supporting-text">
                <span className="mdl-typography--font-light mdl-typography--subhead">Turn the little green Android mascot into you, your friends, anyone!</span>
              </div>
              <div className="mdl-card__actions">
                 <a className="android-link mdl-button mdl-js-button mdl-typography--text-uppercase" href="">
                   androidify.com
                   <i className="material-icons">chevron_right</i>
                 </a>
              </div>
            </div>

            <div className="mdl-cell mdl-cell--3-col mdl-cell--4-col-tablet mdl-cell--4-col-phone mdl-card mdl-shadow--3dp">
              <div className="mdl-card__media">
                <img src="images/more-from-2.png" />
              </div>
              <div className="mdl-card__title">
                 <h4 className="mdl-card__title-text">Buttons</h4>
              </div>
              <div className="mdl-card__supporting-text">
                <span className="mdl-typography--font-light mdl-typography--subhead">A clean, simple, customisable home screen that comes with the power of Google Now: Traffic alerts, weather and much more, just a swipe away.</span>
              </div>
              <div className="mdl-card__actions">
                 <a className="android-link mdl-button mdl-js-button mdl-typography--text-uppercase" href="">
                   Download now
                   <i className="material-icons">chevron_right</i>
                 </a>
              </div>
            </div>

            <div className="mdl-cell mdl-cell--3-col mdl-cell--4-col-tablet mdl-cell--4-col-phone mdl-card mdl-shadow--3dp">
              <div className="mdl-card__media">
                <img src="images/more-from-3.png" />
              </div>
              <div className="mdl-card__title">
                 <h4 className="mdl-card__title-text">More buttons</h4>
              </div>
              <div className="mdl-card__supporting-text">
                <span className="mdl-typography--font-light mdl-typography--subhead">Hail a taxi, find a recipe, run through a temple – Google Play has all the apps and games that let you make your Android device uniquely yours.</span>
              </div>
              <div className="mdl-card__actions">
                 <a className="android-link mdl-button mdl-js-button mdl-typography--text-uppercase" href="">
                   Find apps
                   <i className="material-icons">chevron_right</i>
                 </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
    );
  }
});


module.exports = LandingComponent;
