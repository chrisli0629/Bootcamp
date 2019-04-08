// THIS CODE RUNS IN THE BROWSER

var todoAPIurl = "https://whispering-inlet-10068.herokuapp.com/todos";

$('document').ready(function(){
    $.ajax({
        "url" : todoAPIurl,
        "method": "GET"
    })

    .done(function(dataObj){    // success
        // empty the existing todos
        $("ul").empty();
        // loop over the array we received from API
        dataObj.map(function(todo){
           let completed = todo.isComplete ? "class='completed'" : "";
           // let's add li's to the ul in the app
           $("ul").append(
             `<li ${completed} data-id='${todo.id}'> 
                ${todo.description}
                <span><i class="fa fa-times"></i></span>
             </li>`
           )
        })
    })   

    .fail(function(errorObj){   // error condition
        // what to do if the call fails?
        console.error("API call failed with error " + JSON.stringify(errorObj) );
        return false;
    })
})
  

// UPDATE
$('ul').on('click', 'li', function() {
  
  var thisTodoId = $(this).data("id");

  $.ajax({
    url: todoAPIurl+"/"+thisTodoId,
    method: "PUT"
  })
  .done(function(){
    $(this).toggleClass('completed');
  })

});

// DELETE
$('ul').on('click', 'span', function(event) {
  $(this).parent().remove();
});

// CREATE
$('input').keypress(function(event) {
  if (event.which === 13) {
    var todoItem = $(this).val();
    $('ul').append(
      `<li>
          ${todoItem}
          <span>
             <i class='fa fa-times'></i>
          </span>
        </li>`
    );
    $('input').val(""); // moved the "" to within the parentheses
  }
});