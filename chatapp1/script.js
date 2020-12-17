$(document).ready(function(){
    var chatclick = document.getElementById("chatclick");
    chatclick.addEventListener("click",function(){
        $("#chatbox").fadeIn();
        $("#chatclick").fadeOut();
    })
    var chatcross = document.getElementById("chatcross");
    chatcross.addEventListener("click",function(){
        $("#chatbox").fadeOut();
        $("#chatclick").fadeIn();
    })
})