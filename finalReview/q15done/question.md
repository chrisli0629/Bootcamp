## Question A:

Suppose you are given the following code

    db.things.insert( { type : ['dog', 'cat'] } );
    db.things.insert( { type :  ['cat'] } );
    db.things.insert( { type : ['cow'] } );
    db.things.insert( { egg: ['duck', 'hen', 'ostrich']  } );

Write a mongo query that would return unique values of each of the keys
	- type, 
    - egg, 
    - hello // non existent


## Question B:

In the above database, how would you count the number of mongo documents which contain a type "cat".


