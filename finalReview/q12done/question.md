What is the output of the following?  Please explain (credit given for the explanation only). 

Hint: This tests your understanding of "hoisting". It might help to write down what is happening step by step.


"function"
the value of bar is the function, it gets declare after it has been use in the function itself. 
```
  function bar() {
    return foo;
    foo = 10;
    function foo() {}
    var foo = '11';
  }

  console.log(typeof bar());
```
