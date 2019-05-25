$(document).ready(()=>{
    $(".waveButton").click((e)=>{
        $(e.target).parent().addClass("waved");
        setTimeout(function(){
            $(e.target).parent().removeClass("waved")
        }, 1000);
    });
});