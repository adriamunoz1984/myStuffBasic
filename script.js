$(function(){
    $.fn.clickers = function(){ 
        alert('You have successfully defined the function!'); 
        console.log("Hello There");
    }
    $(".dTop").click(function(){
        $.fn.clickers();
    });
});

//Controller rotate button code//
var leftRIght = 5;
var upDown = 5;
var incVal = 5;


$(".pFront").click(function(){
 $(".controllerMenu").css({"transform":"rotateX(0deg) rotateZ(0deg)","left":"45vw"});
 // $(".perp-rotate").css({"transform":"rotateY(0deg) rotateX(0deg)"});
});
$(".pRight").click(function(){
 $(".controllerMenu").css({"transform":"rotateY(-"+(leftRIght+=incVal)+"deg) rotateZ(0deg)"});
 // $(".perp-rotate").css({"transform":"rotateY(-"+(leftRIght++)+"deg) rotateX(0deg)"});
});
$(".pBack").click(function(){
 $(".controllerMenu").css({"transform":"rotateY("+(leftRIght+=incVal)+"deg) rotateZ(0deg)"});
 // $(".perp-rotate").css({"transform":"rotateY("+(leftRIght++)+"deg) rotateX(0deg)"});

});

$(".pLeft").click(function(){
 $(".controllerMenu").css({"transform":"rotateY("+(leftRIght+=incVal)+"deg) rotateZ(0deg)"});
 // $(".perp-rotate").css({"transform":"rotateY("+(moveUnit++)+"deg) rotateX(0deg)"});
});
$(".pTop").click(function(){
 $(".controllerMenu").css({"transform":"rotateX("+(upDown+=incVal)+"deg) rotateZ(0deg)"});
 // $(".perp-rotate").css({"transform":"rotateX("+(moveUnit++)+"deg) rotateX(0deg)"});

});
$(".pDown").click(function(){
 $(".controllerMenu").css({"transform":"rotateX(-"+(upDown+=incVal)+"deg) rotateZ(0deg)"});
 // $(".perp-rotate").css({"transform":"rotateX(-"+(upDown++)+"deg) rotateX(0deg)"});

});
