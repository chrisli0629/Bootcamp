What would be the output of the following code snippet.  Why?  Correct the code if possible.

<img src="images/image0.png" width=25% style="padding-left:20px;">

### Solution here please ...

    Returned `undefined`

    Javascript automatically puts a semi-colon after each complete statement.  Here line #2 `return` is a complete statement.  As such it is executed, ignoring the rest of the code. 

    Fix: 

    Move the `{` in line #3 to the end of the return statement.