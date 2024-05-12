//TASK

//1 = if (a string with zero)
//Will alert be shown?

/*
if ("0") {
  alert( 'Hello' );
}
*/

//ANSWER:

//Yes, it will.
//Any string except an empty one (and "0" is not empty) becomes true in the logical context.


////////////////////////////////////////////////////////////////////////


//2 = The name of JavaScript
//Using the if..else construct, write the code which asks: ‘What is the “official” name of JavaScript?’
//If the visitor enters “ECMAScript”, then output “Right!”, otherwise – output: “You don’t know? ECMAScript!”

//ESQUEMA EN LA PAGINA https://javascript.info/ifelse#tasks

//ANSWER:

/* 
<!DOCTYPE html>
<html>

<body>
  <script>
    'use strict';

    let value = prompt('What is the "official" name of JavaScript?', '');

    if (value == 'ECMAScript') {
      alert('Right!');
    } else {
      alert("You don't know? ECMAScript!");
    }
  </script>


</body>

</html>
*/


////////////////////////////////////////////////////////////////////////


//3 = Show the sign
//Using if..else, write the code which gets a number via prompt and then shows in alert:
/* 
1, if the value is greater than zero,
-1, if less than zero,
0, if equals zero.
*/
//In this task we assume that the input is always a number.

//ANSWER:

let value = prompt('Type a number', 0);

if (value > 0) {
  alert( 1 );
} else if (value < 0) {
  alert( -1 );
} else {
  alert( 0 );
}


////////////////////////////////////////////////////////////////////////


//4 = Rewrite 'if' into '?'
//Rewrite this if using the conditional operator '?':

/* 
let result;

if (a + b < 4) {
  result = 'Below';
} else {
  result = 'Over';
}
*/

//ANSWER:

let result = (a + b < 4) ? 'Below' : 'Over';

////////////////////////////////////////////////////////////////////////

//5 = Rewrite 'if..else' into '?'
//Rewrite if..else using multiple ternary operators '?'.
//For readability, it’s recommended to split the code into multiple lines.

/*
let message;

if (login == 'Employee') {
  message = 'Hello';
} else if (login == 'Director') {
  message = 'Greetings';
} else if (login == '') {
  message = 'No login';
} else {
  message = '';
}
*/

//ANSWER:

let message = (login == 'Employee') ? 'Hello' :
  (login == 'Director') ? 'Greetings' :
  (login == '') ? 'No login' :
  '';