/**
  * Module to contain all the web API to interact with the server
**/

var api = {
  login : function(params){
    // just returning dummy data until it works and whatnot.
    params.success({
        token : "totally legit JWT"
    });
    // hint hint $.ajax({});
  }
};

module.exports = api;
