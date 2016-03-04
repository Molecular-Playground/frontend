/**
 * This component operates as a "Controller-View".  It listens for changes in
 * the LoginStore and passes the new data to its children.
 */

var React = require('react');
var ReactDOM = require('react-dom');

var modelSettingsHolder = {
  position: 'absolute',
  top:'5px',
  right:'5px',
  zIndex:'99'
}
var modelSettingsBtn = {
  opacity:'0.32'
}

var ModelViewer = React.createClass({

  getInitialState : function() {
    return {
      style: {
        position:"relative",
        width: "0",
        height: "0"
      },
      bckgrndColor: '0xffffff',
      dataStyle: 'stick'
    };
  },

  componentDidMount: function() {
    var parentWidth = ReactDOM.findDOMNode(this).parentNode.offsetWidth;
    this.setState({
      style: {
        position:"relative",
        width: parentWidth,
        height: parentWidth
      }
    });
  },

  /**
   * @return {object}
   */
   /**
   TODO: settings for models viewer
   <div style={modelSettingsHolder} >
     <button className="mdl-button mdl-js-button mdl-button--icon" style={modelSettingsBtn}>
       <i className="material-icons" id="modelsettings">settings</i>
     </button>

     <ul className="mdl-menu mdl-menu--bottom-right mdl-js-menu mdl-js-ripple-effect"
         htmlFor="modelsettings">
     </ul>
   </div>
   */
  render: function() {
      return (
        <div>


          <div style={this.state.style} className='viewer_3Dmoljs' data-pdb={this.props.model} data-backgroundcolor={this.state.bckgrndColor} data-style={this.state.dataStyle}></div>
        </div>
      );
  },

});

module.exports = ModelViewer;
