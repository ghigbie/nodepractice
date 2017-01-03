//operators are used to assign values and perferm operatiosn

//One Ternary operator
// condition ? expr1 : expr2 // will be evaluated if considtion is true;
//otherwise expr2 will be evaluated

//Binary operators require two operands
//1 + 2;
//A * b;

//Unary operators - requires operand before or after the operators
// a++ // postfix increment operator
// ++a // prefix increment operator

let a = 1;
console.log(a++); //pints a and then increments
console.log(a);
console.log(++a); //increments and then prints

console.log(); // prints nothing

//Arithmatic Operators - ,  + , *, /, %

let total = 32 + 46 - 13; //65

console.log(total);

let product = 5* 5;

console.log(product);

let totalCost = 32.00; // assign value of 32.00 to totalCost
console.log(totalCost);

//Eqaulity - checks for equal value
console.log(3 == '3'); //true

//Strict equality - checks for equal value and type
console.log(3 === '3'); //false

let firstName = 'Jack';
let lastName = 'Davis';
console.log(firstName + " " + lastName);

let remainder = 25 %5;
console.log(remainder);

console.log(23%4);
