## Question A (50% credit): 

Does the HTML below trigger a HTTP GET request for the picture file, when the page first loads?  

Hint: you may put it in a sample page, load it and check out the network tab in the Devtools.

Case 1:
    
    <img src="mypic.jpg" style="visibility: hidden" alt="">

    It does not request an http request 

Case 2:
    
    <img src="mypic.jpg" style="display:none" alt="">

    It does not request an http request 


## Question B (50% credit)

What steps can you take to optimize your CSS and images on the web page?  Try to list at least 4 strategies. Think about reducing the work the browser needs to do, to select.  
image size
style
utilize picture element 
store images in a different folder 

Separately, what can be done to optimize rendering of images?
auto value to default the browser 
pixalated value 
crisp edges for better contrast 

