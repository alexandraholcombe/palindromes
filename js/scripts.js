//Business Logic
var userInput = 0;
var reverse = 0;
var rawData = 0;

var verifier = function () {
  for (var i = 0; i < userInput.length; i++) {
    reverse = userInput.length -1 - i;
    $(".result").show();
    if (userInput[i] != userInput[reverse]) {
      $("#palindrome").text("This is not a palindrome")
      return false;
    }
    else if (userInput[i] === userInput[reverse]) {
      $("#palindrome").text("This is a palindrome")
    }
}
}


//User Interface
$("document").ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    userInput = $("input#user-string").val().split("");
    verifier();
  });
});
