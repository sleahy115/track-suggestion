$(document).ready(function() {
  $("#questions form").submit(function(event) {
    event.preventDefault();
    $("#questions").hide();
    var question1Input = $("input#artistic").val();
    var question2Input = $("input#small").val();
    var question3Input = $("input#interactive").val();
    var question4Input = $("input#look").val();
    var question5Input = $("input#mobile").val();

    if (question1Input === "artistic" && question4Input === "look") {
    $("#design").show();
    }
    else if (question2Input === "small" && question3Input === "interactive"){
    $("#ruby").show();
    }
    else if (question2Input === "large" && question3Input === "fixed" ){
    $("#php").show();
    }
    else if (question5Input === "yes" && question2Input === "large"){
    $("#java").show();
    }
    else if (question5Input === "yes" && question1Input === "artistic"){
    $("#java").show();
    }
    else if (question5Input === "no" && question1Input === "logical") {
    $("#java").show();
    }
    else if (question1Input || question2Input || question3Input || question5Input || question4Input === ""){
    $("#error").show();
  }
  jQuery.readyException = function( error ) {
  console.error( error );
  }
  });
});
