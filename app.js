var request=require("request");
var express=require("express");
var app = express(); // sets up the server
var baseUrl = "api.meetup.com";
var eventGet = "/2/event/"; // add ID after
app.set('views', __dirname + '/views'); // sets dir

app.set('view engine', 'jade');


app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
  request('', function(error, response, html){
    if(!error && response.statusCode === 200){
      return metadataArray;
    }
  });


  res.send(200);

});

console.log("now running");
app.listen(3000);
