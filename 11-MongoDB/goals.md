<center>

### AUSTIN COMMUNITY COLLEGE 
#### Web Software Bootcamp 
##### January 2019 - August 2019

</center>

# Week 10 - NodeJS, Templating, MongoDB and Related Topics
  
## 1. MongoDB

MongoDB is one of the NoSQL databases which allows for flexible schemas (a schema represents the structure of how data is stored).  In MongoDB, it is a easier to change the schema during use, than with relational databases like Oracle or MySQL.  

Here, data is stored as JSON like structure called BSON (or binary JSON, which is very compact).  It is easy to create, read and write to the data documents using JavaScript and NodeJS.  Storage of documents are also scaleable to very large data sets.
 
Please review these pages on how to install Mongo on your OS

* [Instructions for Windows](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/)
* [Video Walkthru of Installation - Manny](https://drive.google.com/file/d/1347d5_-X-LOrettDE1vpSqqU4gVDVx34/view?usp=sharing)

* [Instructions for Mac OSX](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/)
* [Video Walkthru of Installation - Manny]()

Then review these pages on how to work with the documents

* [Read & Write (CRUD) Operation](https://docs.mongodb.com/v3.0/core/crud-introduction/)

Also, review how to model data stores in Mongo as follows

* [Mongo Data Models](https://docs.mongodb.com/v3.0/core/data-modeling-introduction/)

**Self Learning**

* [MongoDB in 30 Minutes - Youtube](https://youtu.be/pWbMrx5rVBE)

    Note: The instructor's installation and execution method varies slightly from what we will use in class.  You may follow either one.  Neither one is more correct than the other.


# Projects

1. Note about installing MongoDB: You may run into an error that says “mkdir: /data/db: Permission denied”. If this happens, try running “sudo mkdir -p /data/db” and entering your password: http://i.imgtc.com/xnEY5DO.png

2. You will know that you’ve got it working when you run “mongod” in your terminal and get something that looks like this: http://i.imgtc.com/JR6gOZN.png

3. This is the Mongo daemon, and it starts the mongo server. You will want to keep it running in the background when working with MongoDB. Open a new tab in the Terminal and run “mongo”: http://i.imgtc.com/3olfVqu.png

4. This is the Mongo shell. It’s kind of like the JavaScript console and we can use it to run commands in Mongo. You can refer to this list for commonly used commands: https://docs.mongodb.com/manual/reference/mongo-shell/


## Project #1: 

1. In the shell, create a database called “mydatabase”. 
2. Create a collection called “coffee”.
3. Within coffee, create an object that has name: "frappuccino" and size: "grande".
4. Create another object that has name: “espresso” and size: “tall”.
5. Create one more object that has name: “earl grey” and size: “grande”.
6. Now, select earl grey and update it to have another key value pair: temp: “hot”.
7. Let’s also update espresso to have the name “White Chocolate Mocha” instead.
8. Let’s do a search. How do we find all drinks that have a size of grande?
9. How do we delete an object from our collection?
10. How do we delete the coffee collection?
11. How do we delete the mydatabase database?

