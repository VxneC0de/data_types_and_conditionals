// Tasks

//1 = What's the result of OR?
//What is the code below going to output?

/*
alert( null || 2 || undefined );
*/

//ANSWER:

//The answer is 2, that’s the first truthy value.


////////////////////////////////////////////////////////////////////////


//2 = What's the result of OR'ed alerts?
//What will the code below output?

/*
alert( alert(1) || 2 || alert(3) );
*/

//ANSWER:

//The answer: first 1, then 2.

//The call to alert does not return a value. Or, in other words, it returns undefined.

//1-The first OR || evaluates its left operand alert(1). That shows the first message with 1.
//2-The alert returns undefined, so OR goes on to the second operand searching for a truthy value.
//3-The second operand 2 is truthy, so the execution is halted, 2 is returned and then shown by the outer alert.

//There will be no 3, because the evaluation does not reach alert(3).


////////////////////////////////////////////////////////////////////////


// 3 = What is the result of AND?
//What is this code going to show?

/* 
alert( 1 && null && 2 );
*/

//ANSWER:

//The answer: null, because it’s the first falsy value from the list.

////////////////////////////////////////////////////////////////////////


//4 = What is the result of AND'ed alerts?
//What will this code show?

/* 
alert( alert(1) && alert(2) );
*/

//ANSWER:

//The answer: 1, and then undefined.
//The call to alert returns undefined (it just shows a message, so there’s no meaningful return).
//Because of that, && evaluates the left operand (outputs 1), and immediately stops, because undefined is a falsy value. And && looks for a falsy value and returns it, so it’s done.


////////////////////////////////////////////////////////////////////////


// 5 = The result of OR AND OR
//What will the result be?

/* 
alert( null || 2 && 3 || 4 );
*/

//ANSWER:

//The answer: 3.

//The precedence of AND && is higher than ||, so it executes first.
//The result of 2 && 3 = 3, so the expression becomes:

//null || 3 || 4
//Now the result is the first truthy value: 3.


////////////////////////////////////////////////////////////////////////


//6 = Check the range between
//Write an if condition to check that age is between 14 and 90 inclusively.
//“Inclusively” means that age can reach the edges 14 or 90.

//ANSWER:

/*
if (age >= 14 && age <= 90)
*/


////////////////////////////////////////////////////////////////////////


//7 = Check the range outside
//Write an if condition to check that age is NOT between 14 and 90 inclusively.
//Create two variants: the first one using NOT !, the second one – without it.

//ANSWER:

//The first variant:
/*
if (!(age >= 14 && age <= 90))
*/

//The second variant:
/*
if (age < 14 || age > 90)
*/


////////////////////////////////////////////////////////////////////////


//8 = A question about "if"
//Which of these alerts are going to execute?
//What will the results of the expressions be inside if(...)?

/*
if (-1 || 0) alert( 'first' );
if (-1 && 0) alert( 'second' );
if (null || -1 && 1) alert( 'third' );
*/

//ANSWER:

//The answer: the first and the third will execute.
//Details:

// Runs.
// The result of -1 || 0 = -1, truthy
if (-1 || 0) alert( 'first' );

// Doesn't run
// -1 && 0 = 0, falsy
if (-1 && 0) alert( 'second' );

// Executes
// Operator && has a higher precedence than ||
// so -1 && 1 executes first, giving us the chain:
// null || -1 && 1  ->  null || 1  ->  1
if (null || -1 && 1) alert( 'third' );


////////////////////////////////////////////////////////////////////////


//9 = Check the login
//Write the code which asks for a login with prompt.
//If the visitor enters "Admin", then prompt for a password, if the input is an empty line or Esc – show “Canceled”, if it’s another string – then show “I don’t know you”.

//The password is checked as follows:

//If it equals “TheMaster”, then show “Welcome!”,
//Another string – show “Wrong password”,
//For an empty string or cancelled input, show “Canceled”
//The schema:

//ESQUEMA EN LA PAGINA!!!

//Please use nested if blocks. Mind the overall readability of the code.
//Hint: passing an empty input to a prompt returns an empty string ''. Pressing ESC during a prompt returns null.

//ANSWER:

let userName = prompt("Who's there?", '');

if (userName === 'Admin') {

  let pass = prompt('Password?', '');

  if (pass === 'TheMaster') {
    alert( 'Welcome!' );
  } else if (pass === '' || pass === null) {
    alert( 'Canceled' );
  } else {
    alert( 'Wrong password' );
  }

} else if (userName === '' || userName === null) {
  alert( 'Canceled' );
} else {
  alert( "I don't know you" );
}



// 9 = 