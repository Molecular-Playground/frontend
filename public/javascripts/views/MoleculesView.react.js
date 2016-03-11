var React = require('react');
var ReactPropTypes = React.PropTypes;

var ModelCardComponent = require('../components/ModelCardComponent.react');

var Molecules = React.createClass({
  render : function( ){
    return(
      <div>
        <a name="top"></a>
        <div className="android-be-together-section mdl-typography--text-center">
          <div className="mdl-grid">
            <div className="mdl-cell mdl-cell--1-col"><ModelCardComponent cardTitle="Test"/></div>
            <div className="mdl-cell mdl-cell--1-col"><ModelCardComponent cardTitle="Test"/></div>
            <div className="mdl-cell mdl-cell--1-col"><ModelCardComponent cardTitle="Test"/></div>
            <div className="mdl-cell mdl-cell--1-col"><ModelCardComponent cardTitle="Test"/></div>
            <div className="mdl-cell mdl-cell--1-col"><ModelCardComponent cardTitle="Test"/></div>
            <div className="mdl-cell mdl-cell--1-col"><ModelCardComponent cardTitle="Test"/></div>
            <div className="mdl-cell mdl-cell--1-col"><ModelCardComponent cardTitle="Test"/></div>
            <div className="mdl-cell mdl-cell--1-col"><ModelCardComponent cardTitle="Test"/></div>
            <div className="mdl-cell mdl-cell--1-col"><ModelCardComponent cardTitle="Test"/></div>
            <div className="mdl-cell mdl-cell--1-col"><ModelCardComponent cardTitle="Test"/></div>
            <div className="mdl-cell mdl-cell--1-col"><ModelCardComponent cardTitle="Test"/></div>
            <div className="mdl-cell mdl-cell--1-col"><ModelCardComponent cardTitle="Test"/></div>
          </div>

        </div>
    </div>
    );
  }
});


module.exports = Molecules;
