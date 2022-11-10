$(function(){

// HIDE
$("#hide").click(function(){
    $(".box").hide(1000);
})


// show
$("#show").click(function(){
    $(".box").show(1000);
})

// Toggle
$("#hide_show").click(function(){
    $(".box").toggle(1000);
})

// fade in
$("#fade").click(function(){
    $(".box").fadeIn(1000);
})


$("#out").click(function(){
    $(".box").fadeOut(1000);
})


$("#in_out").click(function(){
    $(".box").fadeToggle(1000);
})


$("#slide_up").click(function(){
    $(".box").slideUp(1000);
})

$("#slide_down").click(function(){
    $(".box").slideDown(1000);
})

$("#slide_up_down").click(function(){
    $(".box").slideToggle(1000);
})


$("#ogoaso").click(function(){
    $(".box").addClass("bor");
})


$("#ogojaw").click(function(){
    $(".box").removeClass("bor");
})


$("#ogoasojaw").click(function(){
    $(".box").toggleClass("bor");
})





});


""