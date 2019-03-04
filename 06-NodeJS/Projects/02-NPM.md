<center>

### AUSTIN COMMUNITY COLLEGE 
#### Web Software Bootcamp 
###### January 2019 - August 2019

</center>

# Project: Node and NPM

The objective here is to learn the basics of Node.js. We’re going to install Node.js on
your laptop and get some practice using NPM. We’ll be using NPM to install packages in our applications, so this will be
useful for us very soon.

Create a new folder and call it ‘npm project’.  We will be using it for all of the tasks in this
project.

### Task #1 :

Here’s a fun and simple NPM package you can use to create ASCII hearts in your
terminal!

1. Install Node at https://nodejs.org

2. Once you’ve done that, take a look at this package:
https://www.npmjs.com/package/ascii-heart

3. Read the documentation.

4. Create a file called “asciiheart.js”. Put your code in there, and get some hearts displaying in your
terminal!

5. Try the parameters. Try making bigger and smaller hearts, and use different characters.


### Task #2 :

1. Go to this package:
https://www.npmjs.com/package/readline-sync

2. Read the documentation. Install and use it. Use the same folder as you did for Task #1.

Using node and the readline-sync package, create a JavaScript file that asks three questions in the Terminal:


```
 “What is your name?”
 “What is your favorite food?”
 “What is your favorite drink?” 
```

When you run the file, the program should respond with the sentence, 

```
“Hi ____, your favorite food is _____ and your favorite drink is ____.”
```

### Task #3 :

Using node and the readline-sync package again, create a JavaScript file that asks, 

```
  “How spicy would you like your tacos?”
  ``` 

The user should be presented with a list of choices: 
```
'spicy', 
'very spicy', and 
'so spicy, you won't be able to feel your face'.
```

The terminal should then respond with the question, 
```
“Ok, so you want your tacos to be ____. Are you sure about this?” 
```
The user should then be given the choices to respond, 'yes' or 'no'. 

If they choose `yes`, the output should be 

```
Ok, we will have your order right out.
```
 
If they choose `no`, the output should be 

```
What’s the matter? Can't handle the heat?
```

Note: you’ll want to use the built-in `keyInSelect` method in `readline-sync` to do this task. 
Refer to the documentation for an example.

### Task #4 :

1. Navigate to this package:
https://www.npmjs.com/package/casual

2. ‘Casual’ is a fake data generator. It generates random names, addresses, etc. for us 
quick and easy!

3. Install casual and create a file called casual.js. Read the documentation.

4. Create a simple program that outputs the following statement in the terminal. 
Use casual to create the fake data:

```
Hello there (name)! How was your trip to (country)? Did you get to 
visit (city)? I sure do hope you had awonderful time. Is your phone 
number still (phone number)?I will try to give you a call sometime. 
By the way, I want to send you a fresh loaf of bread at your address 
of (address) Well, anyways. I will you soon. I will be giving
you a visit sometime before (month). Until then, farewell!
```