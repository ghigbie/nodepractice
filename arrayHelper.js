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

//ES6 way of doing things using the fat arrow functions
let addOneMap2 = array.map(value => value + 1);
console.log(addOneMap2);

let vehicles = [
  {make: 'Dodge', model: 'Ram 1500', year: '2011', is4WD: true},
  {make: 'Dodge', model: 'ChargerR/T', year: '2015', is4WD: false},
  {make: 'Nissan', model: 'Rogue', year: '2016', is4WD: false}
];
//map lets us take an array of objects and take one Property out of that to create a new array
let models = vehicles.map(vehicle => vehicle.model);
console.log(models);

let makes = vehicles.map(vehicle => vehicle.make);
console.log(makes);

let years = vehicles.map(x => x.year);
console.log(years);

let fourWheelDrives = vehicles.map(y => y.is4WD);
console.log(fourWheelDrives);
