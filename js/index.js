$(document).ready(function() {
  $("#id").click(function() {
    $("#contact").addClass("show");
    $("#one").removeClass("show");
    $("#two").removeClass("show");
    $("#three").removeClass("show");
  });
  
  $("#show-one").click(function() {
    $("#contact").removeClass("show");
    $("#one").addClass("show");
    $("#two").removeClass("show");
    $("#three").removeClass("show");
  });
  
  $("#show-two").click(function() {
    $("#contact").removeClass("show");
    $("#one").removeClass("show");
    $("#two").addClass("show");
    $("#three").removeClass("show");
  });
  
  $("#show-three").click(function() {
    $("#contact").removeClass("show");
    $("#one").removeClass("show");
    $("#two").removeClass("show");
    $("#three").addClass("show");
  });
  
});