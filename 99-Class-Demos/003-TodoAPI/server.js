// THIS CODE RUNS ON THE SERVER VIA NODEJS

var express = require('express')
var app = express()

var cors = require('cors')
app.use(cors())

var morgan = require('morgan')
app.use(morgan('dev'))

var bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

var port = process.env.PORT || 3000

var todoNextId = 3;

var toDoArray = [
    {id: 1, description: "Call mom", isComplete: false},
    {id: 2, description: "Buy groceries", isComplete: false},
    {id: 3, description: "Go to movies", isComplete: false}
]

app.get('/', function(req, res){
    res.send('You have reached my ToDos API!!')
})

// READ - GET
app.get('/todos', function(req, res){
    res.send(toDoArray);
})


// READ A SPECIFIC TODO OBJECT - GET WITH PARAM
app.get('/todos/:todoid', function(req, res){
    // we parseInt this param, because it is a string
    let requestedToDoId = parseInt(req.params.todoid)

    // let's find the todo in the array that matches the todoId passed in
    var requestedToDo = toDoArray.find(function(todo){
        return todo.id === requestedToDoId
    })

    // send the requested todo, status of 200 is automatic
    res.send(requestedToDo)
})


// CREATE - POST
app.post('/todos', function(req, res){
    // create new todo object based on the
    // data received by this API 

    let newTodo = {
        id: todoNextId++, // was : parseInt(req.body.id),
        description:  req.body.description,
        isComplete: false
    }
    // add the new todo to the todoArray
    toDoArray.push(newTodo)
    // let's see how our toDoArray looks now
    // console.log(toDoArray)
    // set the status code which is sent back 
    // and send the new todo to the client
    res.status(201).send(newTodo)
})


// UPDATE - PUT
app.put('/todos/:todoid', function(req, res){
    // the req.params object contains all the params (e.g. :todoid)
    console.log('the req.params object is :', req.params)

    // we parseInt this param, because it is a string
    let requestedToDoId = parseInt(req.params.todoid)

    // let's find the todo in the array that matches the todoId passed in
    var requestedToDo = toDoArray.find(function(todo){
        return todo.id === requestedToDoId
    })

    // toggle the completion status
    requestedToDo.isComplete = !requestedToDo.isComplete;
    
    // return the toggled todo as confirmation
    res.send(requestedToDo)
})


// DELETE
app.delete('/todos/:todoid', function(req, res){
    var requestedToDoId = parseInt(req.params.todoid)

    // Find the index of the requested todo in the toDoArray
    // The findIndex function loops over the toDoArray
    var requestedToDoIndex = toDoArray.findIndex(function(todo){
        return todo.id === requestedToDoId;
    })

    // if the requestedToDoIndex was not found then throw error
    if(requestedToDoIndex == -1) {
        res.status(400).send(`The todo id ${requestedToDoId} does not exist`)
    } else {
        // remove the requested todo from the toDoArray
        toDoArray.splice(requestedToDoIndex, 1)
        // console.log(toDoArray)
        
        // send the toDoArray as a confirmation
        res.send(toDoArray)
    }
})


// // LISTEN - now being listened within ./bin/www
// app.listen(port, function(){
//     console.log(`Started ToDo API on port ${port}`)
// })

module.exports = app