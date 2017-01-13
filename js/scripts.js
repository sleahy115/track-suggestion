$(document).ready(function() {
  $("#button-y").click(function(){
    $("#yes").toggle();
    $("#paint-button").toggle();
  });
  $("#button-n").click(function(){
    $("#no").toggle();
  });
  $("#paint-y").click(function(){
    $("#artist").toggle();
  });
  $("paint-n").click(function(){
    $("#no-artist").toggle();
  });
});
