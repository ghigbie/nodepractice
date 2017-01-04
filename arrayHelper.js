//Array Helper methods

let array = [32, 49, 54, 58];
console.log("For Loop ======");
for(var x=0; x < array.length; x++){
  console.log(array[x]);
}

//this is an array helper method
console.log("For EACH =======");
array.forEach(function(value){ //the value keyword here can be anything
  console.log(value);
});

//Fat arrow function
console.log("FOR EACH FAT ARROW ========");
array.forEach(value => console.log(value));

console.log("GRADES ============");
let grades = [98, 87, 93, 86, 74, 89, 56, 34, 89, 97];
let sum = 0;

grades.forEach(grade => sum += grade);
let average = sum/grades.length;
console.log(`Our average is ${average}`);
//toFixed() function is called
console.log(`Our average is ${average.toFixed(1)} this is fixed to a decimal point`);

//Map Helper - iterate through an array and perform some operation on each element
//One of the most commonly used helper methods.

let array2 = [1, 2, 3, 4, 5]
let addOne = []; //using a new array to avoid mutating data (best to not do that)

for(let x = 0; x < array.length; x++){
  addOne.push(array2[x] + 1);
}
console.log("Old arrary " + array2);
console.log(array2);
console.log(addOne);

//ES5 way of doing things
let addOneMap = array2.map(function(value){
  return value + 1
});

console.log(addOneMap);
