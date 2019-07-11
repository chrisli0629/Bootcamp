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

app.get('/home', (req, res) => {
    res.send('Welcome to Home page')
})

app.get('/about', (req, res) => {
    res.send('Welcome to About page')
})

app.get('/shopping', (req, res) => {
    res.send('Welcome to Shopping page')
})

app.post(`/signup`, (req, res) => {
    res.send('Welcome to the SignUp page');
})

app.post('/login', function(req, res){
    res.redirect('/home')
    // res.send('Welcome to the LogIn page');
});

app.get('/logout', (req, res) => {
    res.send('Welcome to the LogOut page');
})

app.listen(port, ()=> {
    console.log(`Listening on port: ${port}`);
})