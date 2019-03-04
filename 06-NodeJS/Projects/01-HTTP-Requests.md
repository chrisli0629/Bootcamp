<center>

### AUSTIN COMMUNITY COLLEGE 
#### Web Software Bootcamp 
###### January 2019 - August 2019

</center>

# Project:​ ​ HTTP​ ​ Requests

It is​ important​​ to​​ understand​ the​ request-response cycle, and how computers communicate with each other. This exercise will help you gain a  fundamental understanding of that.

We will be using a  tool called ‘Postman’. It let’s us make HTTP requests and view responses. It works kind of like a web​ ​browser, but for our purpose, it will allow us to see how​ ​the cycle of requests and responses work.

1. Go to getpostman.com

1. Download install the app (either the Chrome or Mac app)

1. Open the app.

1. Take a  moment to familiarize yourself with the application. Notice it slightly resembles a web browser.

1. Type in a  URL (such as http://www.costco.com​ ) and press the blue send button. What do you get back?

1. Notice the drop down option to the left of the URL bar that says “GET”. What are the other options when you click on it?7. These tell the server what kind of request we are making. ‘GET’ and ‘POST’ are the most commonly used requests. If we are just retrieving information, we use a  GET request. If we are sending some data, such as signing up as a  new user on a  social network or commenting on a  news article, we are making a POST request. PUT and PATCH requests are used for updating information, such as if you were editing a post. A  DELETE request is used when you want to delete something from the database. There are more types of requests, but these are the most commonly used ones.

1. Click on the tab that says ‘headers’. Notice that after we request a  page, we also get back additional
information, such as date, language, etc.

1. While you’re still in the headers tab, take of note of the status code on the right side. You should see “Status: 200 OK”.

1. HTTP​ ​status​ ​codes are a  big piece of HTTP requests. Perhaps you’ve heard of 404 Not Found.  There are many different status codes, and it’s good
to familiarize yourself with what their purpose is. You don’t need to memorize them, but you should know what their function is.

1. Now let’s try this. Go to businessinsider.com on your web browser, not Postman.12. Locate the search icon at the top right. Refer to this image if you can’t find it: http://i.imgtc.com/Ra82OrN.png

1. When the search box appears, search for ‘Apple’ and press enter.

1. When you get back your list of search results, take a look at the URL field. It will look like this:
http://i.imgtc.com/Gro4uJR.png

1. Notice what was added to the end of the URL. This is a  URL parameter consisting of a  key and value.  The “q” is the key, and “apple” is the value.

1. Let’s go back to Postman. In the URL field, type in this url: http://www.businessinsider.com/s​ (notice there is an ‘s’ at the end of this url.)

1. Click on the ‘params’ button on the right of the URL field.

1. Now we have an area to type in some params. On the first row, let’s put ‘q’ into the key, and ‘apple’ as the value. Then hit send.

1. We get back the search request from BusinessInsider in the form of HTML.  As it turns out, we can make GET requests and pass information along 
in the URL with parameters. That’s it! The key take​ ​aways from this project are the different kinds of requests we can make, ​status codes, and how we use URL parameters.