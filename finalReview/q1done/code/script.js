var firstNum = document.getElementById("first")
var secondNum = document.getElementById("second")
var btn = document.querySelector("input[type='submit']")
var msg = document.querySelector("#message")

btn.onClick = function (firstNum, secondNum) {
   let answer = multiply(firstNum, secondNum);
   document.getElementById('message').innerHTML = "The answer is: " +
      answer;
};

const multiply = (a, b) => a * b
