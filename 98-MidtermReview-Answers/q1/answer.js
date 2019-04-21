

var firstNum = document.getElementById("first")
var secondNum = document.getElementById("second")
var btn = document.querySelector("input[type='submit']")
var msg = document.querySelector("p")

btn.onclick = function(){
   let answer = multiply(firstNum.value, secondNum.value)
   msg.innerText = `The answer is ${answer || ''}`
}

// must add return 

function multiply(a, b){
   return a * b
}

