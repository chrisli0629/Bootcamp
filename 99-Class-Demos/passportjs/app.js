var express = require("express");
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var passport = require('passport');
var LocalStrategy = require('passport-local');
var passportLocalMongoose = require("passport-local-mongoose");
var User = require("./models/user");

mongoose.connect("mongodb://localhost/passport_demo")

app.use(bodyParser.urlencoded({extended: true}));

app.use(require('express-session')({
    secret: "Blah blah blah",
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.get("/", function(req, res) {
    res.render("home.ejs");
});

app.get("/newsfeed", isLoggedIn, function(req, res) {
    res.render("newsfeed.ejs");
});

app.get("/signup", function(req, res) {
    res.render("signup.ejs");
});

app.post("/signup", function(req, res) {
    var newUser = new User({username: req.body.username});
    User.register(newUser, req.body.password, function(err, user){
        if(err){
            console.log(err);
            return res.render("signup.ejs")
        } else {
            passport.authenticate("local")(req, res, function(){
                res.redirect("/newsfeed");
            });
        }
    })
 });

 app.get("/login", function(req, res) {
    res.render("login.ejs");
});

app.post('/login', passport.authenticate('local',
    {
        successRedirect: '/newsfeed',
        failureRedirect: '/login'
    }), function(req, res){
});

app.get('/logout', function(req, res){
    req.logout();
    res.redirect('/');
});

function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect('/login');
}


app.listen(3000, function(){
    console.log("App is running on port 3000.");
});
