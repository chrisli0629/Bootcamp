## Question A (50% credit): 

What does the following code do?  How can you reverse the order?

    ```
    var points = [40, 100, 1, 5, 25, 10];
    points.sort(function(roo,raa){return roo-raa});
    ```
    it will sort it in accending order

    you can try the folowing for decending 
        points.sort(function(roo,raa){return raa-roo});
    

## Question B (50% credit): 

What's wrong with my code below?  How would you fix it?  Would using `var pi =` help? Why or why not?

    http://jsbin.com/zugaginigu/edit?js,console
    
Pi needs to be set outside the function
    var pi = 3.14;
(function myFn(radius){
    var boundary = Math.pow(radius, 2) * pi
   
    if(boundary) console.log('boundary is ', boundary);
}(20)) 