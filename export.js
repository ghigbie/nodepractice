let myVaraible = 942;

let fucn1 = () => {
  console.log("Hello from func1");
}

let func2 = () => {
  console.log("Hello from func2");
}
//the ES5 five way of exporting
module.exports.myVar = myVariable;
module.exports.func1 = func1;
module.exports.func2 = func2;
