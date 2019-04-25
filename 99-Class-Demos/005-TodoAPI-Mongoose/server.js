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

const mongoose = require('mongoose');
const mongoUrl = 'mongodb://localhost:27017/todo_list';

var port = process.env.PORT || 3000

app.get('/', function(req, res){
    res.send('You have reached my ToDos API!!')
})



mongoose.connect(mongoUrl, { useNewUrlParser: true })
    .then( function(returnedData) {
        console.log('Connected to Mongo dB at ', mongoUrl);
    })
    .catch( function(err) {
        console.log('Could not connect to database', err);
        process.exit();
    });
 
let TodoSchema = mongoose.Schema({
    description: {
        type: String,
        required: [true, 'Todo description is required']
    },
    isComplete: {
        type: Boolean,
        default: false
    }
    });

let TodoModel = mongoose.model("todo", TodoSchema)

// READ - GET
app.get('/todos', (req, res) => {
    TodoModel.find({}, (err, todos) => {
        if(err) {
            console.log('Error: ', err);
            res.statusCode(400).send({code: 1234, message: 'Error: ' + err});
        };
        res.send(todos);
    })
});
     

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
    TodoModel.create(req.body, function(err, newTodo) {
        if(err) { // handles error
            res.statusCode(400).send({code: 1236, message: 'Cannot post new item to dB'});
        };
        // success
        res.status(201).send(newTodo);
    })

})


// UPDATE - PUT
app.put('/todos/:todoid', (req, res) => {
    TodoModel.findById(req.params.todoid, function(err, todo) {
        if(err) {
            res.status(404).send({
                code: 12404,  // this is error code specific to this project
                message: 'Error finding item with matching id' + err
            });
        } else {
            console.log('todo object is ', todo)
            console.log('todo && todo.isComplete is ', todo && todo.isComplete != undefined)
            if(todo && todo.isComplete !== undefined) todo.isComplete = !todo.isComplete;
            todo.save(function(err, returnedTodo) {
                if(err) res.send({code: 123, message: 'Hallelujah', err:err})
                res.send(returnedTodo);
            })
        }
    });
});
 


// DELETE -- NEEDS REFACTORING FOR MONGOOSE



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


// LISTEN - now being listened within ./bin/www
//        - to start server, run `npm start`
// app.listen(port, function(){
//     console.log(`Started ToDo API on port ${port}`)
// })

module.exports = app