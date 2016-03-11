var React = require('react');
var ReactDOM = require('react-dom');

var Card = React.createClass({

  getInitialState: function() {
    return {
      cardStyle: {
        width: "0"
      }
    };
  },

  componentDidMount: function() {
    var parentWidth = ReactDOM.findDOMNode(this).parentNode.offsetWidth;
    this.setState({
      cardStyle: {
        width: parentWidth
      }
    });
  },

  handleResize: function(e) {
    var parentWidth = ReactDOM.findDOMNode(this).parentNode.offsetWidth;
    this.setState({
      cardStyle: {
        width: parentWidth,
      }
    });
 },

 handleLogIn : function(e) {
   console.log("sdfsdf");
   this.super();
 },


  render: function( ){
    return(
      <div className="mdl-card mdl-shadow--2dp" style={this.state.cardStyle}>
        <div className="mdl-card__title">
          <h2 className="mdl-card__title-text">{this.props.cardTitle}</h2>
        </div>

        {this.props.children}

      </div>
    );
  }
});



module.exports = Card;
