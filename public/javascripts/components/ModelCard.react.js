var React = require('react');
var ReactDOM = require('react-dom');
var ModelViewer = require('../components/ModelViewer.react');


var ModelViewHolder = {
  padding: '0'
}

var ModelCard = React.createClass({

  getInitialState : function() {
    return {
      cardStyle: {
        width: 'auto'
      }
    };
  },



  /**
   * @return {object}
   */
  render: function() {
      return (
        <div>
          <div className="mdl-card mdl-shadow--2dp" style={this.state.cardStyle}>
            <div className="mdl-layout mdl-js-layout">
              <header className="mdl-layout__header mdl-layout__header">
                <div className="mdl-layout__header-row">
                  <span className="mdl-layout-title">Tamiflu</span>
                </div>
              </header>
            </div>
            <div className="mdl-card__title mdl-card--expand" style={ModelViewHolder}>
              <ModelViewer pwidth={this.state.cardStyle.width}/>
            </div>
            <div className="mdl-card__supporting-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Aenan convallis.
            </div>
            <div className="mdl-card__actions mdl-card--border">
              <a className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
                Details
              </a>
            </div>
          </div>
        </div>
      );
  },

});

module.exports = ModelCard;
