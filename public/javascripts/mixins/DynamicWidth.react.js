
var React = require('react');

var DynamicWidth = React.createClass({

  getInitialState: function() {
    return {
      autoWidthStyle: {
        width: "0"
      }
    };
  },

  componentDidMount: function() {
    var parentWidth = ReactDOM.findDOMNode(this).parentNode.offsetWidth;
    this.setState({
      autoWidthStyle: {
        width: parentWidth
      }
    });
  },

  handleResize: function(e) {
    var parentWidth = ReactDOM.findDOMNode(this).parentNode.offsetWidth;
    this.setState({
      autoWidthStyle: {
        width: parentWidth,
      }
    });
  }
});

module.exports = DynamicWidth;
