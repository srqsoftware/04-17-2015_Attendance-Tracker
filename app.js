var request=require("request");
var express=require("express");
var config=require("./config/config");
var app = express(); // sets up the server

var baseUrl = "http://api.meetup.com/";
var eventGet = "/events/:id/attendance "; // add ID after

app.set('views', __dirname + '/views'); // sets dir

app.set('view engine', 'jade');


app.use(express.static(__dirname + '/public'));

app.get('/users', function (req, res) {
  var eventId = "221682391/";
  var groupName = "SarasotaSoftwareEngineers/";
  request( baseUrl + groupName + "events/" + eventId + "attendance" + "?key=" + config.meetup, function(error, response, body){
    if(!error && response.statusCode === 200){
      var resp = JSON.parse(body);
      console.log("info", resp);
      res.sendStatus(200);
    }else{
      console.log(error);
      console.log(config);
      res.sendStatus(400);
    }
  });



});

console.log("now running");
app.listen(3000);
