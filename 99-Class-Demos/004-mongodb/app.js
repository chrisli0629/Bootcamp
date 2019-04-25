var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/my_app", { useNewUrlParser: true });

var userSchema = new mongoose.Schema({
    name: String,
    age: Number,
    email: String
});

var User = mongoose.model("User", userSchema);

var theUser = new User({
    name: "Jerry",
    age: 45,
    email: "jerryseinfeld@gmail.com"
});

theUser.save(function(err, user){
    if(err) {
        console.log("There was an error saving.");
    } else {
        console.log("The data was successfully saved.");
        console.log(user);
    }
    process.exit()
 });
 
