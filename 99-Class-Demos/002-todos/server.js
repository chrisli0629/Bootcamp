var express = require('express')

// morgan allows us to view activity of the node
// process in the console.log
var morgan = require('morgan')

// create an app object from express
var app = express()
app.use(morgan('dev'))

// impart the parsing ability to app object so it 
// can read the body in the request object coming in
var bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

// set a port variable
var port = process.env.PORT || 3000

// this will act like our database of the todo objects
var toDoArray = [
    {id: 1, description: "Call mom", isComplete: false},
    {id: 2, description: "Buy groceries", isComplete: false},
    {id: 3, description: "Go to movies", isComplete: false}
]

// send a message if the user makes a GET request
// to the root ("/") route
app.get('/', function(req, res){
    res.send('You have reached my ToDos API!!')
})

// send all the todos stored in the toDoArray if
// requested via a GET request
app.get('/todos', function(req, res){
    res.send(toDoArray);
})

app.post('/todos', function(req, res){
    // create new todo object based on the
    // data received by this API 
    let newTodo = {
        id: parseInt(req.body.id),
        description:  req.body.description,
        isComplete: false
    }
    // add the new todo to the todoArray
    toDoArray.push(newTodo)
    // let's see how our toDoArray looks now
    console.log(toDoArray)
    // set the status code which is sent back 
    // and send the new todo to the client
    res.status(201).send(newTodo)
})

// start the app listener, which is an endless
// process.  this will keep running unless some
// major error occurs and the code doesn't handle it
app.listen(port, function(){
    console.log(`Started ToDo API on port ${port}`)
})
