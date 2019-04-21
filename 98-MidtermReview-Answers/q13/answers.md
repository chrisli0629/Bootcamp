Consider the following snippet of MongoDB query code.  Please explain what is happening.

    `db.mycol.find({},{"title":1,_id:0}).limit(2)`

### Solution here please ...

In a collection called `mycol`, search everything but limit the number of results to 2. The find model includes a title but not objectID. 
