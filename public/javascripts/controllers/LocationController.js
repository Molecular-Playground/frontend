var angular = require('angular');

angular.module('MolApp').controller('LocationCtrl', ['$scope', 'userService', function($scope, userService){

  this.locs = [
    {
      'viewerId' : 'locUMass',
      'name' : 'UMass Amherst Integrated Sciences Bldg',
      'description': 'The 157,000 square foot Integrated Sciences Building, which opened in 2009 at a cost of $114.5 million, integrates life and chemical sciences, including: 85,000 square feet of modern classrooms and laboratories for basic and advanced courses in chemistry, biochemistry, and biology; a 300-seat auditorium; and flexible research laboratories for life sciences research teams.',
      'dataType' : 'png',
      'url' : '../../images/current_installations/umass.png'
    },
    {
      'viewerId' : 'locSpring',
      'name' : 'Springfield Science Museum',
      'description': 'The Springfield Science Museum, founded in 1859 in City Hall, officially opened in 1899 in a classical revival building, expanded in 1932 with an Art Deco addition, and expanded again in 1970 with the Tolman addition that included a public observatory. In 2004, the Welcome Center was added to the Science Museum to serve as the main entrance to the entire campus. The Science Museum houses permanent collections of Natural Science, Anthropology and Physical Science. The Science Museum’s Seymour Planetarium consists of the historic Korkosz Starball, now the oldest operating star-projector in the United States.',
      'dataType' : 'png',
      'url' : '../../images/current_installations/springfield.png'
    },
    {
      'viewerId' : 'locOlaf',
      'name' : 'St Olaf College',
      'description': 'St. Olaf College Chemistry Department! The Chemistry Department offers courses in the traditional major areas of chemistry, as well as in interdisciplinary areas, such as biochemistry, bioanalytical chemistry, biophysical chemistry, environmental chemistry and organometallic chemistry.',
      'dataType' : 'png',
      'url' : '../../images/current_installations/stOlaf.png'
    },
    {
      'viewerId' : 'locOkinawa',
      'name' : 'Okinawa Institute of Science & Technology',
      'description': 'The Okinawa Institute of Science and Technology is an interdisciplinary graduate school offering a 5-year PhD program in Science. Over half of the faculty and students are recruited from outside Japan, and all education and research is conducted entirely in English.',
      'dataType' : 'png',
      'url' : '../../images/current_installations/okinawa.png'
    },
    {
      'viewerId' : 'locUAlcala',
      'name' : 'Universidad de Alcalá, Madrid, Spain',
      'description': 'Molecular Playground is financed by the University of Alcalá (UAH) as a project for promoting innovation in the teaching and learning process, 2012 call.',
      'dataType' : 'png',
      'url' : '../../media/img/current_installations/uAlcala.png'
    },
    {
      'viewerId' : 'locUEKentucky',
      'name' : 'University of Eastern Kentucky',
      'description': 'Eastern Kentucky University’s New Science Building is featured in the February issue of University Business magazine. The facility is among 16 academic facilities recognized as examples of how institutions are adapting to shifting educational trends by “creating learning spaces that foster innovative thinking and collaboration – and prepare students for the future.”',
      'dataType' : 'png',
      'url' : '../../images/current_installations/uEasternKentucky.png'
    },
    {
      'viewerId' : 'locUPerpignan',
      'name' : 'Université de Perpignan Via Domitia',
      'description': 'The University of Perpignan Via Domita is a modestly sized, multidisciplinary and dynamic campus. Involved in projects at local level, its influence also extends towards southern Catalonia and the rest of the world.',
      'dataType' : 'png',
      'url' : '../../images/current_installations/uPerpignanVD.png'
    },
    {
      'viewerId' : 'locOtterbein',
      'name' : 'Otterbein University',
      'description': 'Otterbein’s story begins in the mid-1800s, before the abolition of slavery, before the women’s rights movement, before equality and inclusion were rights. Otterbein was founded by the Church of the United Brethren in Christ in 1847. Equality and inclusion were, and continue to be, the foundation of the university.',
      'dataType' : 'png',
      'url' : '../../images/current_installations/uOtterbein.png'
    },
    {
      'viewerId' : 'locGilead',
      'name' : 'Gilead Sciences Inc., Foster City, CA',
      'description': 'Gilead Sciences, Inc. is a research-based biopharmaceutical company that discovers, develops and commercializes innovative medicines in areas of unmet medical need. We strive to transform and simplify care for people with life-threatening illnesses around the world. Gilead\'s portfolio of products and pipeline of investigational drugs includes treatments for HIV/AIDS, liver diseases, cancer, inflammatory and respiratory diseases,and cardiovascular conditions.',
      'dataType' : 'png',
      'url' : '../../images/current_installations/gilead.png'
    }
  ]
