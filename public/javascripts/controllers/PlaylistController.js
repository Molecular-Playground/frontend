var angular = require('angular');

angular.module('MolApp').controller('PlaylistsCtrl', ['$scope', '$rootScope', 'userService', function($scope, $rootScope, userService){

  $scope.temp = "";
  $scope.playlistEdit = false;

  $scope.items = [];
  // {
  //   'name' : 'Proteins',
  //   'molList' : [ //   {  //     'name' : 'Zero Calorie Fat II'  //   },  //   {  //     'name' : 'RNA Polymerase'  //   },  //   {  //     'name' : 'Ribosome'  //   },  //   {  //     'name' : 'Acetophenone'  //   },  //   {  //     'name' : 'whatever'  //   }  //   ]     // },  // {  //   'name' : 'Acids',  //   'molList' : [  //   {  //     'name' : 'DNA'  //   },  //   {  //     'name' : 'HIV Protease'
  //   }
  //   ]   
  // }
  // ];

  // $rootScope.$on;

  $scope.addItem = function () {
    if($scope.temp != ""){
      $scope.items.push({
        'name' : $scope.temp
      });
      $scope.temp = "";
    }
    //TODO add error message upon failure
  };

  $scope.toggleEdit = function () {
    $scope.playlistEdit = !$scope.playlistEdit;
    var sendBool = $scope.playlistEdit;
    $rootScope.$broadcast('burp');
  }

  this.mols = [
    {
      'viewerId' : 'molTamiflu',
      'name' : 'Tamiflu',
      'description': 'The Tamiflu® drug binds to a protein on the influenza virus (neuraminidase) that the virus needs in order to infect cells. This structure shows the drug binding to, and inhibiting, the target protein, and hence helping to control infection by flu, including H1N1.',
      'author' : 'John Doe',
      'creationDate' : '12/4/2015',
      'dataType' : 'pdb',
      'url' : '../../media/pdb/1mbs.pdb'
    },
    {
      'viewerId' : 'molHIVProtease',
      'name' : 'HIV Protease',
      'description': 'The Human Immunodeficiency Virus (HIV), responsible for AIDS, uses a protease (an enzyme) that is essential to its infection and reproduction. Scientists have designed an inhibitor of this enzyme that effectively stops viral growth, and has dramatically extended the healthy lifespans of HIV-infected individuals. This structure shows an animation of the drug binding to, and inhibiting, the HIV protease.',
      'author' : 'Jane Smith',
      'creationDate' : '4/21/2007',
      'dataType' : 'pdb',
      'url' : '../../media/pdb/1mbs.pdb'
    },
    {
      'viewerId' : 'molRibosome',
      'name' : 'Ribosome',
      'description': 'The Ribosome - the machine that makes protein is largely RNA! This structure led to the Nobel Prize in Chemistry in 2009. We used to think that proteins were the only biomacromolecules that could achieve catalysis. We now think that RNA was the primordialy enzyme.',
      'author' : 'Sarah Hoffman',
      'creationDate' : '7/13/2010',
      'dataType' : 'pdb',
      'url' : '../../media/pdb/1mbs.pdb'
    },
    {
      'viewerId' : 'molDNA',
      'name' : 'DNA',
      'description': 'DNA - the information storage molecule of life.',
      'author' : 'Matt Token',
      'creationDate' : '5/2/2016',
      'dataType' : 'pdb',
      'url' : '../../media/pdb/1mbs.pdb'
    },
    {
      'viewerId' : 'molCRABP',
      'name' : 'CRABP',
      'description': 'Cellular retinoic acid binding protein transports fatty acids in your cells - studied by the Gierasch lab at UMass.',
      'author' : 'Carol Albona',
      'creationDate' : '12/13/2015',
      'dataType' : 'pdb',
      'url' : '../../media/pdb/1mbs.pdb'
    },
    {
      'viewerId' : 'molAcetophenone',
      'name' : 'Acetophenone',
      'description': 'Vibrational modes in acetophenone, a natural flavoring. Real molecules are not static, but vibrate with thermal energy.',
      'author' : 'Shawn Connor',
      'creationDate' : '12/31/2015',
      'dataType' : 'pdb',
      'url' : '../../media/pdb/1mbs.pdb'
    },
    {
      'viewerId' : 'mol0CalFatI',
      'name' : 'Zero Calorie Fat I',
      'description': 'A sugar-based zero-calorie fat developed by Proctor & Gamble. Although chemically, this molecule should behave like a fat, the unnatural linkage makes it not digestable by our cellular enzymes.',
      'author' : 'Jake Canton',
      'creationDate' : '6/9/2014',
      'dataType' : 'pdb',
      'url' : '../../media/pdb/1mbs.pdb'
    },
    {
      'viewerId' : 'mol0CalFatII',
      'name' : 'Zero Calorie Fat II',
      'description': 'A zero-calorie fat developed by Proctor & Gamble. Although chemically, this molecule should behave like a fat, the unnatural linkage makes it not digestable by our cellular enzymes.',
      'author' : 'Jake Canton',
      'creationDate' : '6/10/2014',
      'dataType' : 'pdb',
      'url' : '../../media/pdb/1mbs.pdb'
    },
    {
      'viewerId' : 'molRNAPolymerase',
      'name' : 'RNA Polymerase',
      'description': 'RNA polymerase transcribes DNA in cells into RNA copies - studied by the Martin lab at UMass.',
      'author' : 'Emily Harrison',
      'creationDate' : '5/11/2012',
      'dataType' : 'pdb',
      'url' : '../../media/pdb/1mbs.pdb'
    }
  ];
  componentHandler.upgradeDom();
}]);
