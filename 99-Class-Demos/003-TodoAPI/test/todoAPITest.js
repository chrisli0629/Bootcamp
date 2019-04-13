
var test = require('supertest'),
    app  = require('../server');

describe('2. GET items test', function(){

    it('2.a Should return 200 status for /todos - HAPPY PATH', function(done){
        test(app)
            .get('/todos')
            .expect('Content-Type', /json/)
            .expect(200, done);
    })

    it('2.b Should POST -- returning a 200 status code for posting a new item', function(done){
        var todo = { description: 'Complete homework', completed : false};
        test(app)
            .post('/todos')
            .set ('Accept', 'application/json')
            .send(todo)
            .expect(201)
            .expect(/HOMEWORK/i, done);
    });

})