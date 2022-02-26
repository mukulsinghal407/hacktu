//requirements
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const moongoose = require("mongoose");
const { default: mongoose } = require("mongoose");

moongoose.connect("mongodb+srv://admin-mukul:Test123@cluster0.tj2jy.mongodb.net/hacktu3",{ useNewUrlParser: true, useUnifiedTopology: true });

//Setting things up
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));
app.set("view engine", "ejs");

const Student=new mongoose.Schema({
    name:String,
    roll:String,
    branch:String,
    email:String
});

const subject = new mongoose.Schema({
    branch:String,
    code:String,
    teacherCode:String
});

const teacher = new mongoose.Schema({
    name:String,
    phoneNo:String,
    teaching:[String],
    email:String,
    code:String
});

const attendace= new mongoose.Schema({
    name:String,
    subCode:String,
    min:Number,
    current:Number
});

const userStudent = mongoose.model("Student",Student);
const userTeacher = mongoose.model("Teachers",teacher);
const Subject = mongoose.model("Subjects",subject);
const Attendace = mongoose.model("Attendace",attendace);

const Students=[
    {
        name:"shgdyif",
        roll:"102003370",
        branch:"uygdf",
        email:"ndvi@jdgv.com"
    },
    {

    }
] 

app.get("/",(req,res)=>
{
    res.render("login");
});

app.get("/",function(req,res){
    res.render("dashboard",{info:["HELLO hell","hi ","idvuwjdvbinwlv"]});
});

app.get("/my/:subject",function(req,res){
    res.render("subject",{info:req.params.subject});
});


app.listen(process.env.PORT||3000,(req,res)=>
{
    console.log("Server started at 3000");
});