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
  {id: 1, make: 'Dodge', model: 'Ram 1500', year: '2011', is4WD: true},
  {id: 2, make: 'Dodge', model: 'ChargerR/T', year: '2015', is4WD: false},
  {id: 3, make: 'Nissan', model: 'Rogue', year: '2016', is4WD: false}
];

let truckDriver = {
  vehiclerId: 1,
  name: "Jack"
}
//map lets us take an array of objects and take one Property out of that to create a new array
let models = vehicles.map(vehicle => vehicle.model);
console.log(models);

let makes = vehicles.map(vehicle => vehicle.make);
console.log(makes);

let years = vehicles.map(x => x.year);
console.log(years);

let fourWheelDrives = vehicles.map(y => y.is4WD);
console.log(fourWheelDrives);

//more helper methods

//FILTER - it allows you to filter out only certain elements in an array. - gets all of the elements
//that match the criteria

let filteredVehicles = vehicles.filter(vehicle => vehicle.make === 'Dodge');
console.log("ES6 filter methods");
console.log(filteredVehicles);

//ES5

let filteredVehicles2 = vehicles.filter(function(vehicle){
  return vehicle.make === 'Dodge';
});
console.log("ES5 filter method");
console.log(filteredVehicles2);

//FIND HELPER method
//- gets the first element that matches the criteria and stops

//ES5
let vehicle = vehicles.find(function(vehicle){
  return vehicle.make === 'Nissan'
})
console.log(vehicle);


vehicle = vehicles.find(function(vehicle){
  return vehicle.make === 'Dodge'
})
console.log(vehicle);

//ES6 fat arrow methods
let vehicle2 = vehicles.find(vehicle => vehicle.make === 'Nissan');
console.log(vehicle2);

function driverForVehicle(vehicles, driver){
  return vehicles.find(function(vehicle){
    return vehicle.id === driver.vehicleId;
  });
}

let driver = driverForVehicle(vehicles, truckDriver);
console.log("drive variable called");
console.log(driver);

//EVERY
// - can take a look at array and see that every element meets some condition

let areAll4WD = vehicles.every(function(vehicle){
  return vehicle.is4WD === true;
});

console.log(areAll4WD); //not all of the vehicles are 4WD, that means that they do not all mee the condition

let areAll4WD2 = vehicles.every(vehicle => vehicle.is4WD == true);
console.log(areAll4WD2);
