var express = require('express');
var path = require("path");
var fs = require("fs");
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	console.log(path.join(__dirname+'/../views/pageTemplate.html'));
  res.sendFile(path.join(__dirname+'/../views/pageTemplate.html'));
});

/*
router.get('/app', function(req,res,next) {
	console.log(path.join(__dirname+'/../views/app.html'));
  res.sendFile(path.join(__dirname+'/../views/app.html'));
});

router.get('/login', function(req,res,next) {
	console.log(path.join(__dirname+'/../views/login.html'));
  res.sendFile(path.join(__dirname+'/../views/login.html'));
});

router.get('/register', function(req,res,next){
	console.log(path.join(__dirname+'/../views/register.html'));
	res.sendFile(path.join(__dirname+'/../views/register.html'));
});
*/

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

module.exports = router;
