//Arrays are like a list.  They are multiple values stored inside a singe variables
//Arrays are decalred with saquare brackets

let grades = [92, 95, 96, 98, 84, 87, 93]; //zero based index

console.log(`My first grade was ${grades[0]}`);
console.log(`My second grade was ${grades[1]}`);

let myStuff = ["baseball", "football", 32, true, "magic mouse"]; //this is perfectly fistName

console.log(myStuff.length);

//Array methods
//people

//POP
let poppedValue = myStuff.pop(); //pop takes the value off the end and pops it off of the stack
console.log(poppedValue);

console.log(myStuff);

myStuff.push(poppedValue); //push adds a value to the end of an array
console.log(myStuff);

//PUSH
//you can also push multiple values
console.log(grades);
grades.push(79, 32, 85);
console.log(grades);

//SHIFT - operate at the begining of the array
let shiftedValue = myStuff.shift();
console.log(shiftedValue);
console.log(myStuff);

//UNShift - operate at the begining of the array
myStuff.unshift(shiftedValue);
console.log(myStuff);

//CONCAT
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];

let concatArray = array1.concat(array2);
console.log(concatArray);

let array3 = [7, 8, 9];
let array4 = [10, 11, 12];
let concatArray2 = array1.concat(array2, array3, array4);

console.log(concatArray2);

//REVERSE
let reversedArray = concatArray2.reverse();
console.log(reversedArray);

//SORT
let statesArray = ["Missour", "Arkansas", "Arizona", "Texas"];
let sortedStatesArray = statesArray.sort();
console.log(sortedStatesArray);
