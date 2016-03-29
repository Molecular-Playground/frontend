var express = require('express');
var path = require("path");
var fs = require("fs");
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	console.log(path.join(__dirname+'/../views/index.html'));
  res.sendFile(path.join(__dirname+'/../views/index.html'));
});


router.get('/app', function(req,res,next) {
	console.log(path.join(__dirname+'/../views/app.html'));
  res.sendFile(path.join(__dirname+'/../views/app.html'));
});

router.get('/login', function(req,res,next) {
	console.log(path.join(__dirname+'/../views/login.html'));
  res.sendFile(path.join(__dirname+'/../views/login.html'));
});

/* GET register page. */
router.get('/register', function(req,res,next){
	console.log(path.join(__dirname+'/../views/register.html'));
	res.sendFile(path.join(__dirname+'/../views/register.html'));
});

/* GET molecules page. */
router.get('/molecules', function(req,res,next){
	console.log(path.join(__dirname+'/../views/molecules.html'));
	res.sendFile(path.join(__dirname+'/../views/molecules.html'));
});

router.get('/testpdb', function(req,res,next){
	console.log('reading file');
	fs.readFile('views/test.pdb', function (err,data) {
  if (err) {
    return console.log(err);
  }
	console.log('sending...');
	res.set('Content-Type', 'text/plain');
	res.send(data);
	});
});

router.get('/current_installation', function(req, res, next){
	console.log(path.join(__dirname+'/../views/current_installation.html'));
	res.sendFile(path.join(__dirname+'/../views/current_installation.html'));
});

module.exports = router;
