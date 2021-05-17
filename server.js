const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
 res.sendFile(__dirname+"/index.html");

});

/* To submit*/


app.post("/", function(req, res){
  var weight_kg = Number(req.body.Num1);
  var height_cm = Number(req.body.Num2);
  var bmi = weight_kg/(height_cm*height_cm);
  res.send("The answer is " + bmi);
});
/* app.get("/", function(req, res){
  res.send("<h1>Hello World</h1>");
});



app.get("/about", function(req, res){
  res.send("<h1>The details of Maker</h1><p>This is the detail page</p>");
});

app.get("/Shady", function(req, res){
  res.send("<h1>Shady</h1>");
}); */

app.listen(3000, function(){
  console.log("Server has started on port 3000");

});
