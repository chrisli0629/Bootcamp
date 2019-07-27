//push example adds the element to the end of the array

var fruits = ["banana","apple","grape"];
fruits.push("tomato");
 // "banana","apple","grape","tomato"

 //splice adds to the middle 
 var fruits = ["banana","apple","orange"];
 fruits.splice(0,1,"grape");
 //banana,grape,apple,orange

 //concat
 var fruits = ["banana","apple","grape"];
 var newfruits=fruits.concat("tomato","orage");
 // "banana","apple","tomato","orange"

 //unshift adds the element to the begining of the array 
 var fruits = ["banana","apple","grape"];
 fruits.push("tomato");
 // "tomato","banana","apple","grape"

  //index notation
  var fruits = ["banana","apple","grape"];
  fruits[2]="tomato";
 // "banana","apple","tomato","grape"
