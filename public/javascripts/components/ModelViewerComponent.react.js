/**
 * This component operates as a "Controller-View".  It listens for changes in
 * the LoginStore and passes the new data to its children.
 */

var React = require('react');
var ReactDOM = require('react-dom');

var ModelViewer = React.createClass({
  getInitialState: function() {
    return {
      cardStyle: {
        postition: "relative",
        width: "0",
        height: "0"
      }
    };
  },

  componentDidMount: function() {
    var parentWidth = ReactDOM.findDOMNode(this).parentNode.offsetWidth;
    var goldenRatio = 1.618;
    this.setState({
      cardStyle: {
        postition: "relative",
        width: parentWidth,
        height: parentWidth/goldenRatio
      }
    });
  },

  handleResize: function(e) {
    var parentWidth = ReactDOM.findDOMNode(this).parentNode.offsetWidth;
    var goldenRatio = 1.618;
    this.setState({
      cardStyle: {
        postition: "relative",
        width: parentWidth,
        height: parentWidth/goldenRatio
      }
    });
 },
  /**
   * @return {object}
   <div style={this.state.style} className='viewer_3Dmoljs' data-pdb={this.props.model} data-backgroundcolor={this.state.bckgrndColor} data-style={this.state.dataStyle}></div>
   */
  render: function() {
      return (
        <div style={this.state.cardStyle} className='viewer_3Dmoljs' data-pdb='2POR' data-backgroundcolor='0xffffff' data-style='stick'></div>
      );
  },

});

module.exports = ModelViewer;
