var express = require('express')
var app = express()

app.use(express.static('./build'))

app.listen(3000, function(){
    console.log('my own server started on 3000!')
})