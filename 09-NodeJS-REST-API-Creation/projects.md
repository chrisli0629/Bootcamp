<center>

### AUSTIN COMMUNITY COLLEGE 
#### Web Software Bootcamp 
##### January 2019 - August 2019
</center>

# PROJECTS

Due to the complexity and learning value of projects in this week, the due date is next week Wednesday.  Please complete these and ask for help if required.  There is a ton of stuff to learn and work through this week.  So please do not procrastinate to the end of the week.  

**You WILL BE CHALLENGED!!**  :sweat_smile:

<details>
<summary>1.0. Build your own RESTful API</summary>

This week, we will build a Restful API using Node and Express. We will use what we learned in Week 8 with consuming APIs. We will learn a few new tricks. Much of the knowledge you already have from last week. Otherwise, you will be required to read the documentation and find out how to build your API. We have provided references as needed. You may ask additional questions throughout your build process.

Scope: to build a restful backend that will support our 1-day trial class project of a ToDo App. It should support the following use cases (and routes):

```
1. Getting all ToDo items                                       GET  /todos
2. Creating a new ToDo item                                     POST /todos
3. Marking a specific ToDo item as completed or not completed   PUT  /todos/:id
4. Deleting a specific ToDo item                                DELETE /todos/:id
```

We will not be using authentication or encryption at this time. If you have not done so, install the Postman app to test your API.  

Get familiar with Postman interface. At the minimum, check out the following - GET/POST etc HTTP verbs selector, URL input, specifying URL params, saving your test, saving your test to a collection, environments, specifying the body. These should be sufficient for now.  [Install Postman from here.](https://www.getpostman.com)

We will demo using `curl` to do testing using the command line, in lieu of Postman above.

In your server.js file, do the following:

1.1. GET all ToDo items

1. Create an express instance (var app = express());

2. Create a variable for the port. We'll need this for the cloud server. Set it to process.env.PORT or 3000, so our api works locally as well as on the cloud server.

3. Create an API Root ('/') where you send some message that tells the user what this API should be used for.

4. Setup the listen method on the port that you defined in (2) above. Test whether it works.

5. At this stage we are not going to save our ToDo data to any persistent storage (a database). Create an array variable called `toDoArray` that has 2 sample ToDos, with the name columns of `id`, `description` and `isComplete` keys. We will use this array as a data store for our ToDo API, for now.

6. Create a /todos route, whose callback sends the toDoArray back as JSON. Sending as JSON is important. Read about the json method of response object on ExpressJS site.

7. Test it in Postman and save it to your test collections in Postman.

8. Change your sample data, restart the server and see if the response through Postman changes. Try it with `curl`.


1.1.2 GET a specific ToDo item, based on the `:id` passed-in with the url of the request. 


1.1.3 Insert (POST) a ToDo item.

1. Create a route with an appropriate http verb with something like /todos

2. Create a variable that tracks toDo's id's. We'll use this variable to track and increment the id's.

3. You are going to need the body-parser module to read the data sent from the browser (client) back to the api (server). Install it and use it with your express instance to parse json bodies, as a middleware. (Did you remember to save the module to the package.json?)

4. Within the callback function for this route, add the description, completed fields and an updated id (from the id variable you setup earlier) to the toDoArray and send the body back to the client along with the id assigned.

5. Test this from within Postman. Set the body by clicking on body tab, selecting raw data and typing in a JSON object that with description and completed attributes. Remember to send this from Postman as a JSON object (look for a dropdown). You could have done this by setting the Content-Type header to 'application/json' as well.

To complete these requirements, you may use the Lodash or the Underscore library.  Try using JS native functionality if you would like additional learning.


1.1.3.1 Validate the POSTED ToDo

1. Install, save and require lodash in our server app. Visit the semantic versioning page here and review what the ^ and ~ really mean and when to use them in package.json.

2. Make sure that the Create a ToDo route above does just that and no more. That is, one should not be able to insert data which is not expected by the todo app design.  It should only accept strings as the description field, and booleans as completed field. (Hint: you may have to use lodash. Look for appropriate methods within lodash that test for a variable being a string or a boolean). Also test that a space trimmed description field is not of zero length. If the tests fail, "return" an appropriate 4** status code (look at the list of http status codes). A return would stop the function from carrying out rest of the commands below the return.

3. It should trim the description of any leading or trailing spaces.


1.1.4 DELETE a specific ToDo

1. Create a DELETE route on /todos/:id to delete a particular ToDo from our list.
2. When an id is passed in, test whether it is a valid expected datatype.
3. Using underscore library, use an appropriate method to delete the object with the passed in :id, from the toDoArray and return the new array.
4. Make sure you are testing if such an :id exists in the array. If it doesn't, then return an appropriate http error code and empty object.

1.1.5 Update (PUT) a specific ToDo item's completion status (toggle).

1. Create a PUT route on /todos/:id to update the status of a ToDo.
2. Similar to inserting a ToDo, validate the :id, i.e. convert to a number and underscore.findWhere that :id exists in the toDoArray.
3. If the id does not exist, return an error. If the id exists, find the matched ToDo in the toDoArray
4. Then set the matched ToDo reference object's completed attribute to the reverse of the completed attribute (toggle it). Since the matched ToDo object is passed by reference (it really refers to the object within toDoArray), setting its completed property completes this step.
</details>





<details>
  <summary>2.0. Connect the Front-end to the Back-end</summary>
    <p>
        Here we are going to tie up the front-end ToDo app and the back-end ToDo API, so that they can together provide the CRUD functionality that is needed by a web app.
    </p>
    <p>
        2.1. Based on your knowledge of HTML/CSS/JS/APIs and jQuery, take your project from your trial class and modify it to persist the ToDos to the api. Notice, however, that the ToDos get reset if the server.js is restarted.  To prevent that, we'll have to persist the changes to a database like Mongo or Postgres instead of the todoArray. We shall do that later. For now, how can we use jQuery and AJAX to connect our front end trial class ToDo App to our new API?
    </p>
</details>




<details>
  <summary>3.0 API Testing</summary>

We will look into testing if time permits this week.  Else, we will follow up next week.

3.1. Test Driven Development & Automated Testing

Test driven development (or TDD) is nowadays a firm requirement on most projects. Most developers will first write a test and then write the feature to satisfy the test. In this project we will first write the feature and then attempt to write the test. In final projects you will be expected to write the tests and then write the features.

Automatic testing provides many benefits. It makes sure that all your commited features work. It ensures that later features don't break the earlier ones. It brings out contradicting features, if they have crept into your code.

Writing and getting these tests to run successfully is desirable in this week's API building project.

3.2 Setup testing using Supertest assertion library

Supertest is a testing framework which is very similar to Chai that we saw earlier.  You are free to use either testing framework.  We'll demo use of supertest in class.

How to setup tests using supertest may be reviewed by looking at supertest's documentation and other references as below

- https://github.com/visionmedia/supertest
- https://blog.codeship.com/testing-http-apis-supertest/

In each test, make sure that you test the status code received as expected, you test the type of the object received (i.e. JSON object) and test the content using .expect and regex, e.g. `.expect(/buy icecream/i, done)`. You may add additional tests as you see fit. Chain the tests together, as shown in the supertest documentation. Also ensure that the description of the test (as it('Should return a JSON object')) is written as simply as possible, so a non-technical person can find out what is being tested.

Also, when designing your tests, make sure of the order of tests so that they setup and clean up after themselves. For example, you may create a to do, get it, update it and then as a last step delete it.

1. Read:
1	Successful get of all ToDos (happy path).
2	Successful get of one ToDo (happy).
3	Not found error if you ask for a non existent id (unhappy).

2. Create:
1	Successful creation (happy path).
2	Insertion of leading and trailing spaces (unhappy).
3	Insertion of ToDo attributes that don't exist in the schema (design) (unhappy).
4	Incomplete ToDo attributes inserted (unhappy).
5	Blank description inserted in a ToDo (unhappy).

3. Toggle Status
1	Successful toggle from completed to not completed.

4. Delete:
1	Running delete without passing an id doesn't delete all todos.
2	Running delete with non existent id returns not found error.
3	Running delete with valid id, returns success code.


3.2.1 Sample test specification would look like this, though written in your chosen assertion library (e.g. chai)

```
var test = require('supertest'),
    path = require('path'),
    app  = require(path.join(__dirname, '..', 'server'));

describe('GET items test', function(){

    it('Should return 200 status for /todos', function(done){
        test(app)
            .get('/todos')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });
});
```
</details>

