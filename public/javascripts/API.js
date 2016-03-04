/**
  * Module to contain all the web API to interact with the server
**/

var api = {
  login : function(params){
    if (!(params.data)) // throw error on empty data input
      throw new error("must have data to send with /api/login");
    /*// just returning dummy data until it works and whatnot.
    params.success({
        token : "totally legit JWT"
    });*/
    // send request to server with proper paramaters.
    $.ajax({
      contentType: "application/json",
      dataType : "json",
      method : "POST",
      url : "http://192.168.99.100:8000/api/login/",
      success : params.success || function (data) {console.log("data uncaught for /api/login");},
      error : params.error || function (data) {/* error will be handled by browser*/},
      data : JSON.stringify(params.data)
    });
  }
};

module.exports = api;
