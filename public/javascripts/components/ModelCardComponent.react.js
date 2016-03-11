var React = require('react');
var ReactDOM = require('react-dom');

var ModelViewer = require("./ModelViewerComponent.react");
var Card = require("./CardComponent.react");

var MoleculeCard = React.createClass({


  render : function( ){
    return(
      <div>
        <Card cardTitle={this.props.cardTitle}>
          

            <ModelViewer ></ModelViewer>

        </Card>
      </div>
    );
  }
});



module.exports = MoleculeCard;
