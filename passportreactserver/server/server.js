const express = require('express');
const app = express();
app.use(express.static('public'));

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

const cors = require('cors');
app.use(cors());


const morgan = require('morgan')
app.use(morgan('dev'))

const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/passport_reactDemo', {useNewUrlParser: true})
let User = require('./models/user')

const passport = require('passport')
const LocalStrategy = require('passport-local')
app.use(require('express-session')({
    secret: 'dogcat',
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


const port = process.env.PORT || 3001

app.get('/home', isLoggedIn, (req, res) => {
    console.log('Home????')
    res.send('Welcome to Home page')
})

app.get('/about', isLoggedIn, (req, res) => {
    res.send('Welcome to About page')
})

app.get('/shopping', isLoggedIn, (req, res) => {
    res.send('Welcome to Shopping page')
})

app.post(`/signup`, (req, res) => {
    console.log('name:', req.body.username, 'password: ', req.body.password);
    let newUser = new User({
        username: req.body.username
    });
    User.register(newUser, req.body.password, (err,user) => {
        if(err){
            console.log("Registering error: ", err.message);
            res.status(400).send(err.message);
        }
        passport.authenticate('local')(req, res, () => {
            console.log('Here???', req.user)
            res.send(req.user);
        }) 
    })
})

app.post('/login', passport.authenticate('local'), function(req, res){
    console.log('QQQQQ');
    res.send(req.user);
});

app.get('/logout', (req, res) => {
    req.logout();
    res.send(req.user);
})

function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect('/login');
}



app.listen(port, ()=> {
    console.log(`Listening on port: ${port}`);
})