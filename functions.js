//Functions let you group a series of statements together to perform
//some task. Once a function is created, it can be resused over and
//over in your code. If you find yourselft repeating statments in your code,
// then a function may be the answer to avoid repetition.
//DRY - Don't repeat yourselft

//Function in javascript are frist class objects...They can have properties
//and methods just like any other object. Where they differ, is in the fact that
// functions can be called.

//these function calls are hoisted to the top
sayHi();
sayHiWithParameter("Billy Goat!");

console.log("///////////////////");

function sayHi(){
  console.log("Well, hello there.");
}



function sayHiWithParameter(name){
  console.log( `Well, hello there ${name}`);

}

sayHi();
sayHiWithParameter("Billy Goat!");
//functions are hoisted to the top of your code

function addThreeNumbers(a, b, c){
  //console.log(a + b +c);
  return a + b + c;
}

let result = addThreeNumbers(10, 20, 30);
console.log(result);

function sayHello(firstName, lastName){
  return `Well, hello ${firstName} ${lastName}`;

}

let greeting = sayHello("Billy", "Moore");
console.log(greeting);

//function expression - assign anonymous (unnamed)funtion to a variable
//function expressions are not hoisted to the top

let sayGreeting = function(){ //There is no name associated with this fuction
  return "Well, Hellow there."; //
}

console.log(sayGreeting());

//IIFF - Immediately Invoked Function expression
let sayGreeting2 = (function(){
  return `Hi, how are you?`;
}());  //The function expression is declaired and and Immediately called

console.log(sayGreeting2);

let sayGreeting3 = (function(firstName, lastName){
  return `Well, hello there ${firstName} ${lastName}`
}("Johnny", "Doggie"));

console.log(sayGreeting3);

//ES6 Fat Arrow functions
//With ES6 we now have a new syntax for functions. They are called "arrow fucntions"
// or "Fat Arrow Functions". Arrow functions do no bind 'this' =>

let speakNames = (firstName, secondName) => {
  return `The names are ${firstName} and ${secondName}`;
}

//this above function is identicle to "let speakNames = function(firstName, secondName) {}"

console.log(speakNames("Jack" , "Jill"));

//if there is only one return statement, we can get rid of the return block,
//the above fucntion can be written as

let speakNames2 = (firstName, secondName) => `The names are ${firstName} and ${secondName}.`
console.log(speakNames2("Dave", "Sammy"));

let speakNames3 = firstName => `The name is ${firstName}.`;
console.log(speakNames3("Peter"));
