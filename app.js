//requirements
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const moongoose = require("mongoose");

moongoose.connect("mongodb://localhost:27017/hacktu",{ useNewUrlParser: true, useUnifiedTopology: true });

//Setting things up
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));
app.set("view engine", "ejs");

app.get("/",function(req,res){
    res.render("index",{info:["HELLO hell","hi ","idvuwjdvbinwlv"]});
});

app.post("/",(req,res)=>
{
    
});

app.listen(process.env.PORT||3000,(req,res)=>
{
    console.log("Server started at 3000");
});