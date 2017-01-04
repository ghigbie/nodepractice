//everything in javascript that is not a primitive type is an objects
//object is a value type, with key value pairs

//when variables are used in objects they are called properties
//when functions are used in objects they are called methods

//Object literal

var truck = {
  make: 'Dodge',  //commas separate lines
  wheels: 4,
};

//we can use bracket notation or dot notation to access the object

//Bracket notation
console.log(`I have a ${truck['make']} that has ${truck['wheels']} wheels.`);

//Dot notation - most people tend to use this
console.log(`I have a ${truck.make} that has ${truck.wheels} wheels.`);

//Object literal
var employee = {
  //properties
  firstName: "Joe",
  lastName: "Blow",
  //methods - is a function when it is part of an object
  fullName: function(){
    return `${this.firstName} ${this.lastName}`;
  }

};
//Property
console.log(`Our IT Director is ${employee.firstName}`);
//Mehtods
console.log(`His full name is ${employee.fullName()}`);

//Object constructor functions
function Vehicle(make, model, year){
  this.make = make;
  this.model = model;
  this.year = year;

  this.getFullDescritpion = function(){
    return `${this.year} ${this.make} ${this.model}`
  };
}

//Create new instance with the "new" keywords - we are assigning variable to new instance of a vehicle
let myTruck = new Vehicle("Dodge", "Ram 1500", "2011");
let myWifesCar = new Vehicle("Dodge", "Charger R/T", "2015");
let myDaughtersCar = new Vehicle("Nissan", "Rouge", "2016");

console.log(myTruck.year, myTruck.make, myTruck.model);
console.log(myWifesCar.year, myWifesCar.make, myWifesCar.model);
console.log(myDaughtersCar.year, myDaughtersCar.make, myDaughtersCar.model);
console.log("////////////////");
console.log(myTruck.getFullDescritpion());
console.log(myWifesCar.getFullDescritpion());
console.log(myDaughtersCar.getFullDescritpion());

//ES6 features

function createVehicle(make, model, year){
  return{
    //we are returning a new object
    make: make,
    model: model,
    year: year,
    getFullDescritpion: function(){
      return `${year} ${make} ${model}`
    }
  };
}

let myTruck2 = createVehicle("Dodge", "Ram 1500", "2011");
let myWifesCar2 = createVehicle("Dodge", "Charger R/T", "2015");
let myDaughtersCar2 = createVehicle("Nissa", "Rouge", "2016");

console.log(myTruck2.getFullDescritpion());
console.log(myWifesCar2.getFullDescritpion());
console.log(myDaughtersCar2.getFullDescritpion());

//ES6 enhansed object literal syntax
function createVehicle3(make, model, year){
  return{
    //we are returning a new object
    make,
    model,
    year,
    getFullDescritpion() {
      return `${year} ${make} ${model}`
    }
  };
}

console.log("///////////////");

let myTruck3 = createVehicle3("Dodge", "Ram 1500", "2011");
let myWifesCar3 = createVehicle3("Dodge", "Charger R/T", "2015");
let myDaughtersCar3 = createVehicle3("Nissa", "Rouge", "2016");

console.log(myTruck3.getFullDescritpion());
console.log(myWifesCar3.getFullDescritpion());
console.log(myDaughtersCar3.getFullDescritpion());
