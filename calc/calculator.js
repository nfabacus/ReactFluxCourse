var calculator = function() {
  var readline = require('readline-sync');

  var num1 = readline.question('Please enter a number');
  var num2 = readline.question('Please enter another number');
  var operator = readline.question('Please enter and operator(+,-,*,/)');

  operator==="+" ? answer = num1 + num2: operator ==="-"? answer = num1-num2: operator ==="*" ? answer = num1*num2: operator ==="/"? answer = num1/num2 : answer="invalid operator";


  console.log("The answer is :"+ answer);

};

module.exports = calculator;
