var config = function() {

  // var buttons = $('<td>');
  // buttons.css('height', '20px');
  // buttons.css('width', '48px');

  var clearButton = $('#clear');
  var numberButtons = $('.number');
  var operandButtons = $('.operator').not('#clear, #equals, #decimal')
  var decimalButton = $('#decimal')
  var equalsButton = $('#equals')
  var displayScreen = $('#display');
  displayScreen.css('height', '20px');

  var previousNumber = [];
  var currentNumber = [];
  var currentOperator = '';

  clearButton.click(function(e) {
    console.log('clear');
    displayScreen.text("");
    previousNumber = [];
    currentNumber = [];
  });

  numberButtons.click(function(e) {
    console.log($(this).attr('id'));
    displayScreen.append($(this).attr('id'));
    currentNumber.push($(this).attr('id'));
  });

  operandButtons.click(function(e) {
    console.log($(this).attr('id'));
    previousNumber = currentNumber;
    currentNumber = [];
    currentOperator = $(this).attr('id');
  });

  equalsButton.click(function(e) {
    console.log('equals');
    displayScreen.text(doCalc());
    previousNumber = [];
    currentNumber = [];
  });

  var doCalc = function() {
    console.log(previousNumber);
    console.log(currentNumber);
    var prevNum = '';
    var currNum = '';
    previousNumber.forEach(function(v, i, a) {
      prevNum = prevNum + String(v);
    });
    currentNumber.forEach(function(v, i, a) {
      currNum = currNum + String(v);
    });
    switch (currentOperator) {
      case "add":
        result = Number(prevNum) + Number(currNum);
        break;
      case "subtract":
        result = Number(prevNum) - Number(currNum);
        break;
      case "multiply":
        result = Number(prevNum) * Number(currNum);
        break;
      case "divide":
        result = Number(prevNum) / Number(currNum);
        break;
      default:
        result = "000";
    }
    console.log(result);
    return result;
  }
}
