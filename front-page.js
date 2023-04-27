console.log("ok Go");
$(document).ready(function(){
  $("#income-control").click(function(){
    $("#income-area").toggleClass("hide");
  });
  $("#registration-control").click(function(){
    console.log("You Got It!!!");
    $("#registration-area").toggleClass("hide");
  });
  $("#repay-control").click(function(){
    console.log("You Got It!!!");
    $("#repay-area").toggleClass("hide");
  });
  $("#birthday-control").click(function(){
    console.log("You Got It!!!");
    $("#birthday-area").toggleClass("hide");
  });
  $("#student-day-off-control").click(function(){
    console.log("You Got It!!!");
    $("#student-day-off-area").toggleClass("hide");
  });
  $("#employee-day-off-control").click(function(){
    console.log("You Got It!!!");
    $("#employee-day-off-area").toggleClass("hide");
  });
});