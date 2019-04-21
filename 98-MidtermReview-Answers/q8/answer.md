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