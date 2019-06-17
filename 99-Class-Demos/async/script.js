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

// continued ..
function getItems(){
   htmlStr = '';
   doneNode = document.createTextNode("Done");
   // setTimeout is used as async command
   setTimeout(function(){
      items.forEach(function(item){
         htmlStr += `<li>${toInitCase(item.name)}</li>`
      })
   rootDivNode.innerHTML = htmlStr;
   }, 1000)
}

// async command, gets executed in the next tick
getItems();

// sync command, gets executed first
rootDivNode.insertAdjacentHTML("afterend", "<p>Done</p>");
