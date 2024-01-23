//importing express package
const express = require("express");
const app = express();

//listening/starting server
app.listen(3000,function(request,response){
    console.log("Server started at port no 3000");
});
//taking request from client and sending index.html file to client browser
app.get("/",function(request,response){
    response.sendFile(__dirname+"/index.html");
})

//using server machine for calculation
//importing bodyparser package
const bodyParser = require("body-parser");
// Register the middleware globally
app.use(bodyParser.urlencoded({extended:true}));
//performing calculation
app.post("/",function(request,response){
    var weight = request.body.weight;//request-to req weight variable(name att of html) from client machine
    var height = request.body.height;
    var bmi = weight/height;
    response.send("Your BMI is "+bmi)
})
