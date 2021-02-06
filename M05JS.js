var num = prompt('Put in a number for your multiplication set')

var table = num;             // Unit of table
var operator = ''; // Type of calculation
var i = 1;                 // Set counter to 1
var msg = '<h2>Multiplication</h2>';              // Message

if (operator === 'addition') {
  // Do addition
  while (i < 11) {
    msg += i + ' + ' + table + ' = ' + (i + table) + '<br/>';
    i++;
  }
} else {
  // Do multiplication
  while (i < 11) {
    msg += i + ' x ' + table + ' = ' + (i * table) + '<br/>';
    i++;
  }
}

// Write the message into the page
var el = document.getElementById('blackboard');
el.innerHTML = msg;