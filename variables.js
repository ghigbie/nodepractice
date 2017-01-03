var firstName = "Jack";
var gradesToBeCountedInSchool = 5;

var grades_to_be_counted_in_school = 5;

var fullName = "Jack Davis"; //This is a String
var itemsInCar = 32 // Number
var isCartEmpty = false // Boolean

var fistName = "Jack";
var lastName = "Davis";
//ES5
console.log(firstName + " " + lastName); //ES5 way of concatenated
console.log(firstName, lastName);
console.log("///////////////");
//ES6 way of doing things
console.log(`${firstName} ${lastName}`);
console.log(`The IT Directors name is: ${firstName}`);

//ES5
var fullName = firstName + " " + lastName;
console.log(fullName);
//ES6
var fullName = `${firstName} ${lastName}`;
console.log(fullName);

//const and let are towo more keywords for adding varaibles in ES^

var dogsName = 'Cody';
var dogsName = 'Harper';
console.log(dogsName);

let catsName = 'Pickles'
console.log(catsName);
catsName = 'Mouse' //we can't use let here this
console.log(catsName);

//const does not change and is great for varaibles that do not change
const name = "Rick Smith";
let position = "Purchasing Manager";
let salary = 60000;
let extension = 215;
const birthday = 'March 14th, 1974';
