What is the output of the following code?  Why?  (75% credit given for the 2nd question)

```
var arr = [];
arr[0]  = 'a';
arr[1]  = 'b';
arr.foo = 'c';
alert(arr.length);
```

### Solution here please ...

`arr.foo` is a property of the `arr` object, not a member.  And `arr.length` measures the length of the array (counting it's members).  Hence we get 2.

In JS, you would hear this, which is true .. "except for the 6 or so literals, everything in JS is an object".
So `arr` array is also an object. `arr.foo` is a property of the object, but it doesn't count toward the `.length`
property of an array.  Only indexed "members" of the array count.

If you did the same thing with a function (which is an object), you would see similar behavior.  That is, you 
may attach properties to function objects, but it would have no meaningful affect on the function's behavior.
Why would you do that?  I dunno.