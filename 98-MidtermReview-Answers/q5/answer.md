What screen sizes are supported by bootstrap?

Please describe what would be the output of the following code snippet on iphone 5 and on desktop computer, when using Twitter Bootstrap?  What would you expect to see?

```
    <div class="row">
        <div class="col-xs-12 col-md-3">Ruby Red</div>
        <div class="col-xs-12 col-md-3">Navy Blue</div>
        <div class="col-xs-12 col-md-3">Lime Green</div>
        <div class="col-xs-12 col-md-3">Egg Nog</div>
    </div>
```

### Solution

    xs - will display on screens with < 576px 
    sm - will display on screens with > 576px
    md - will display on screens with > 768px
    lg - will display on screens with > 992px
    xl - will display on screens with > 1200px 

With 4 <div> items,

- On an iphone 5 (xs screen size), .col-xs-12 would stack the <divs> on top of each other
- On a md screen size and larger, .col-md-3 would give you 4 divs on each row.
