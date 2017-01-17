//Business Logic
var numberInput = 0;
var result = 1;

var factorialize = function() {
  for (var currentNumber = numberInput; currentNumber > 0; currentNumber -= 1){
    result = result * currentNumber;
    console.log(result);
  };
  $(".result").show();
  $("#factorial").append(result);

};
//User Logic
$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    numberInput = parseInt($("#number").val());
    factorialize();

  });
});

// minh for loop
// for (var currentNumber = 1; currentNumber<=numberInput; currentNumber++)
