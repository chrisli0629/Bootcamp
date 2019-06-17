const items = [
    {"name": "ear rings", quantity : 2},
    {"name": "necklaces", quantity : 6}
 ]
 
 const toInitCase = (str) => {
 return str.split(" ")
    .map(s => s.charAt(0).toUpperCase()
            + s.slice(1))
    .join(" ");
 }
 
 var rootDivNode = document.getElementById("root");
 
 console.log('rootDivNode is ', rootDivNode)
 // continued on next box
 


// continued
// order of statements is solved by using cb function
function getItems(items, cb){
    var htmlStr = '';
    // setTimeout is used as async command
    items.forEach(function(item){
        htmlStr += `<li>${toInitCase(item.name)}</li>`
    })

    setTimeout(function(){
      rootDivNode.innerHTML = htmlStr;
      cb();  // callback executed after list items added
    }, 2000)
 }
 
 getItems(items, function(){
    rootDivNode.insertAdjacentHTML("afterend", "<p>Done</p>");
 });