const app = require('express')()

    var testArray = []

    // CREATE - POST
    app.post('/test', function(req, res){
    let data = req.body && req.body.data
    if(data) {
        let newObj = {
            id: Date.now(), // use time stamp as an id,
            data:  req.body.data,
        } 
        // add the new todo to the testArray
        testArray.push(newObj)
        // set the status code which is sent back 
        // and send the testArray to the client
        res.status(200).send(JSON.stringify(testArray))
    } else {
        res.status(400).send('No data received\n')
    }
    })

    // LISTEN
    app.listen(3000, function(){
        console.log(`Started ToDo API on port 3000`)
    })