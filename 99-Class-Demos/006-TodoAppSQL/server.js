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

// this loads the index.html from ./frontend folder
// and exposes everything within the folder to any browser
app.use(express.static('frontend'))

const mongoose = require('mongoose');
const mongoUrl = 'mongodb://localhost:27017/todo_list';

var port = process.env.PORT || 3000

const { Client } = require('pg');

let connectionObject = {
    host : "pgdb.accsoftwarebootcamp.com",
    database : "accsoftwarebootcamp",
    port : 5432,
    user : "acc",
    password : "accrocks"
 }

 const client = new Client(connectionObject);

 client.connect()
   .then(function() {
       console.log(`PG Connected to ${client.database} dB`);
   })
   .catch(function(err) {
       console.error('PG Connection error', err.stack)
   });



// Commented this out so that the front-end app is
// loaded when you load the root route in browser
//
// app.get('/', function(req, res){
//     res.send('You have reached my ToDos API!!')
// })

// mongoose.connect(mongoUrl, { useNewUrlParser: true })
//     .then( function(returnedData) {
//         console.log('Connected to Mongo dB at ', mongoUrl);
//     })
//     .catch( function(err) {
//         console.log('Could not connect to database', err);
//         process.exit();
//     });
 
// let TodoSchema = mongoose.Schema({
//     description: {
//         type: String,
//         required: [true, 'Todo description is required']
//     },
//     isComplete: {
//         type: Boolean,
//         default: false
//     }
//     });

// let TodoModel = mongoose.model("todo", TodoSchema)

// READ - GET
app.get('/todos', (req, res) => {
    let query =`SELECT id as _id,
                        description,
                        iscomplete AS "isComplete"
                FROM todos.todos;`
    client.query(query, function(err, todos) {
        if(err) {
            console.log('Error: ', err);
            res.status(400).send({code: 1234, message: 'Error: ' + err});
        };
        console.log(todos.rows);
        res.send(todos.rows);
    })
});
     
     
// CREATE - POST
app.post('/todos', function(req, res){
    let newDescription = req.body.description;
    if(!newDescription) {
        res.status(411).send({code: 123455, message: 'Empty todo received'})
     };
    let query = `INSERT INTO todos.todos
                        (description, iscomplete, user_id)
                VALUES ('${newDescription}', false, 2)`; 
    client.query(query, function(err, todos){
        if(err) {
            console.log('Error: ', err);
            res.status(400).send({code: 1239, message: 'Insert Error: ' + err});
        };
        console.log(todos);
        res.send(todos);
    })
})

// UPDATE - PUT
app.put('/todos/:id', function(req, res) {

    let query = `UPDATE todos.todos
                    SET iscomplete =  NOT iscomplete
                WHERE id = ${req.params.id}`;
    client.query(query, function(err, result) {
        if (err) {
            console.log(err.stack)
            res.end();
        } else {
            console.log('Updated iscomplete for', result);
            res.send(result);
        }
    });
 });
 
 


// DELETE -- NEEDS REFACTORING FOR MONGOOSE

app.delete('/todos/:todoid', function(req, res){
    let query = `DELETE FROM todos.todos
                WHERE todos.id = ${req.params.todoid}`;
    // debug('req.params.todoid is ', req.params.todoid)
    client.query(query, function(err, result) {
        if(err) {
            console.log(err.stack);
            res.end();
        }
        console.log('Item has been deleted from dB');
        res.send();
    });   
 })
 

// LISTEN - now being listened within ./bin/www
//        - to start server, run `npm start`
app.listen(port, function(){
    console.log(`Started ToDo API on port ${port}`)
})

// module.exports = app