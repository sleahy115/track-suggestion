$(document).ready(function() {
  $("#questions form").submit(function(event) {
    var question1Input = $("input#artistic").val();
    var question2Input = $("input#small").val();
    var question3Input = $("input#interactive").val();
    var question4Input = $("input#look").val();
    var question5Input = $("input#mobile").val();

    if (question1Input === "artistic" && question4Input === "look") {
    $(".design").show();
    }
    else if (question2Input === "small" && question3Input === "interactive"){
    $(".ruby").show();
    }
    else if (question2Input === "large" && question3Input === "fixed" ){
    $(".php").show();
    }
    else if (question5Input === "yes" && question2Input === "large"){
    $(".java").show();
    }
    event.preventDefault();
  });
});
