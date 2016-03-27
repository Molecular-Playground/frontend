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

router.get('/testpdb', function(req,res,next){
	console.log(path.join(__dirname+'/../views/test.pdb'));
	res.sendFile(path.join(__dirname+'/../views/test.pdb'));
});

router.get('testmorepdb', function(req,res,next){
	console.log(path.join(__dirname+'/../views/othertest.pdb'));
	res.sendFile(path.join(__dirname+'/../views/othertest.pdb'));
});

module.exports = router;
