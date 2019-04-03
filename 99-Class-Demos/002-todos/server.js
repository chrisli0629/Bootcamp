// create an app object from express
// 
// Installation:
//    npm install express --save
//
// Note: EJS and request and not needed as
// Express has the http client ability built in.
var express = require('express')
var app = express()

// morgan allows us to view activity of the node
// process in the console.log
//
// Installation: on your command line type
//      npm install morgan --save
// This will install morgan library into the node_modules folder
// and you would be able to use it.  The --save will also make an
// entry into the package.json file, so that others using this code
// will also get it if they want to run your code.
//
// Do not use the global (-g) flag, as some projects need morgan, and not all.
var morgan = require('morgan')
app.use(morgan('dev'))

// Following imparts the parsing ability to app object so it 
// can read the body in the request object coming in
//
// Following IS required if this API is to receive data
// through POST methods.
var bodyParser = require('body-parser')

// Following is needed if you are going to receive data as JSON
//    e.g.
//  { "id": 1, "description": "Call mom", "isComplete": false}
app.use(bodyParser.json())

// Following is needed if you are going to receive data as Url encoded data
//    e.g.
//        id=1&description=Call%20mom&isComplete=false
app.use(bodyParser.urlencoded({extended: true}))

// Set a port variable
// "process.env" is a JS object, which contains all the settings
// which are available in bash prompt. To find out what they are,
// you may run the following command in a terminal
//
// env
// 
var port = process.env.PORT || 3000

// this will act like our database of the todo objects
var toDoArray = [
    {id: 1, description: "Call mom", isComplete: false},
    {id: 2, description: "Buy groceries", isComplete: false},
    {id: 3, description: "Go to movies", isComplete: false}
]

// Send a message if the user makes a GET request to the root ("/") route
// Later we shall return the ToDo front end app on this route 
app.get('/', function(req, res){
    res.send('You have reached my ToDos API!!')
})

// send all the todos stored in the toDoArray if
// requested via a GET request
app.get('/todos', function(req, res){
    res.send(toDoArray);
})

// accept new todo data from the client (todo app)
// and save it within the toDoArray
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