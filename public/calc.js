var config = function() {

  // var buttons = $('<td>');
  // buttons.css('height', '20px');
  // buttons.css('width', '48px');
// Create variables for button objects
  var clearButton = $('#clear');
  var numberButtons = $('.number');
  var operandButtons = $('.operator').not('#clear, #equals, #decimal')
  var decimalButton = $('#decimal')
  var equalsButton = $('#equals')
  var displayScreen = $('#display');
  // Bump up the input window a bit, makes it less jaring
  displayScreen.css('height', '20px');

  // For the calculations
  var previousNumber = [];
  var currentNumber = [];
  var currentOperator = '';

// To clear the window, very important
  clearButton.click(function(e) {
    console.log('clear');
    displayScreen.text("");
    previousNumber = [];
    currentNumber = [];
  });

// Events for the buttons
  numberButtons.click(function(e) {
    console.log($(this).attr('id'));
    displayScreen.append($(this).attr('id'));
    currentNumber.push($(this).attr('id'));
  });

// Events for the operations
  operandButtons.click(function(e) {
    console.log($(this).attr('id'));
    previousNumber = currentNumber;
    currentNumber = [];
    currentOperator = $(this).attr('id');
  });

// Event for "got to get a sum!" Calls the doCalc() method
  equalsButton.click(function(e) {
    console.log('equals');
    displayScreen.text(doCalc());
    previousNumber = [];
    currentNumber = [];
  });

// Main meat and potatoes
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
