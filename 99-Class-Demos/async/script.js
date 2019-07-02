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
// order of statements is solved by using promise
function getItems(items) {
    var htmlStr = '';
    // Remember any promises you create need to be returned
    // to the caller and resolved or rejected. Here we are
    // returning the promise
    return new Promise(function (resolve, reject) {
      // setTimeout is used to mimic getting a response from
      // a remote resource
      setTimeout(function () {
        if (items.length) {
          items.forEach(function (item) {
            htmlStr += `<li>${toInitCase(item.name)}</li>`
          })
          rootDivNode.innerHTML = htmlStr;
          resolve();   // there's nothing to return here so
                       // we resolve without any value passed in
        } else {
          reject('No inventory found!')
        }
      }, 2000)
    })
 }
 
 
// Invoke the getItems function
getItems(items)
 .then(
   function () {
       rootDivNode.insertAdjacentHTML(
         "afterend", "<p>Done</p>");
   })
 .catch(function(e) {
       console.error(e);
})
