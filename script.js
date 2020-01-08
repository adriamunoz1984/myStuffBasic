$(function(){
    $.fn.clickers = function(){ 
        alert('You have successfully defined the function!'); 
        console.log("Hello There");
    }
    $(".dTop").click(function(){
        $.fn.clickers();
    });
});