let myFuncs = require("./export"); //does not need to .js at the end

console.log(`The value of myVar is ${myFuncs.myVariable}`);
myFuncs.func1();
myFuncs.func2();
