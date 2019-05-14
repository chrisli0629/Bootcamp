center>

### AUSTIN COMMUNITY COLLEGE 
#### Web Software Bootcamp 2018
###### Sept 2018 - Apr 2019

</center>

# Movie React App


#### Your task is to build a React app with a movie theme. This project is going to push your knowledge from all previous projects. It will be a challenge. Most of the content has been covered in class, but you are still going
to have to do some research and test creative code to get it to work. There are MNAY ways to do this, so please do not get bogged down with how others do it. Find your own way.


## REQUIREMENTS:

1. You need to have a minimum of 8 different colors that will be used for your boxes.
2. Boxes must be identical in size.
3. All four boxes MUST be displayed in a a single row
4. [Resource Example slides](https://docs.google.com/presentation/d/1NZ8zjzAoX-tfVLF5OZy6C9qQaZ9KMfOpnt-SzDw07Yk/edit?usp=sharing)

#### Task #1 - Create App

1. Create an app called `movies` using `create-react-app`

#### Task #2 - Create an external JSON file

1. Since we are not using an API or database, you are going to have to hard-code your own data
2. Create a file called `data.json` inside your src folder
3. Your file needs to include `title`, `director`, `cast`, and `image` "name: value pairs".
	1. Example: `"fName": "Student"`
	2. NOTE: You are dealing with JSON so go back over previous projects and notes to see how JSON is used
	3. Your file is going to be an array with 3 objects in it:
		1. Each object is going to have `title` as a string value
		2. Each object is going to have `director` as a string value
		3. Each object is going to have `image` as a path value (locally or external)
			1. This value should lead to an actual image that will be displayed
		4. Each object is going to have `cast` as an ARRAY with a MINIMUM of 2 actors from the movie

#### Task #3 - Build Components

1. Re-arrange your App Component
	1. You should only have one component imported in your App.js -> Movie Component
	2. You will import data from an external json file created above
	3. Data will be passed down to ALL other components via props
2. Build a Movie Component
	1. Movie component should be comprised of a Poster component and an Info component
	2. [Looping through arrays in React](https://stackoverflow.com/questions/29149169/how-to-loop-and-render-elements-in-react-js-without-an-array-of-objects-to-map)
	3. You are going to have to use your Javascript knowledge, in-class projects, creativity, research  and trial-and-error to make it work - there are many ways to get the same result.
3. Build a Poster Component
	1. Will return an image using props passed down from App.js
	2. The `alt` attribute will use `title` that is passed down as props from App.js
4. Build an Info Component
	1. Will use props passed down from App.js
	2. Will return title, director, and cast array
	3. See looping link above
	
#### Task #4 - CSS

1. EACH component should have its own CSS file. I.e., there should be an App.css file, Movie.css file, etc...



