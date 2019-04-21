What is the difference between `req.params` and `req.query`?  Why would you use one instead of the other?  Write simple express.js code that shows how to obtain them from any sample route and console.log their values. Please provide 2 params and 2 query params in your code.

You may test your code using browser, postman or curl.  Curl command provided here ...

`curl localhost:3000/teams/Atlanta%20Falcons/players/Matt%20Ryan`
and
`curl localhost:3000/teams?team=Atlanta&player_name=Matt`


### SOLUTION

Params are useful when there are a few input values received through the route, and displaying a hierarchical structure through the params is helpful.  The params may be mandatory or optional, however having mostly mandatory params is easier to understand.  How would you make a param optional?  (I know this is a question within the answer, but useful nevertheless)

Query params are useful when you may have multiple input values and there is likely to be no relationship between them. Further several of them may be null (optional). 

##### Sample Code

```
var app = require('express')();

app.get('/teams_p/:team/players/:player_name?*', function(req, res){
   console.log(`Team is ${req.params.team} and Player is ${req.params.player_name}`);
   res.send(`Team is ${req.params.team} and Player is ${req.params.player_name}`);
})

app.get('/teams_q', function(req, res){
   console.log(`The params object received was ... ${JSON.stringify(req.query)}`)
   res.send(`The params object received was ... ${JSON.stringify(req.query)}`);
})

app.listen(3000, () => {
    console.log('server running')
})
```