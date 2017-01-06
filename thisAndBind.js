//This and Bind


//The thing called 'this' is the object that 'owns' the javascript code

let hotRod = {}; //new emtpty object

hotRod = {
  sound: 'vrooom',
  soundOff: function(){
    console.log(this.sound);
  }
}

hotRod.soundOff();


let soundFunction = hotRod.soundOff; //this looses its context here
soundFunction();

//We can 'bind' 'this' to the object hotRod.
//This will give soundFunction a 'this' context

let boundSoundFunction = soundFunction.bind(hotRod);
boundSoundFunction();


let person1 = {
  name: 'Joe'
};

let person2 = {
  name: 'Jane'
};

function logName(){
  return this.name;  //this has not context, it's not part of an object
}

console.log(logName());
console.log(logName.bind(person1)()); //now there is a context of Joe
console.log(logName.bind(person2)()); //there is a contxt of Jane


let number = {
  x: 24,
  y: 22
};

let count = function(){
  console.log(this.x + this.y); //no this context here
}
count();

let boundCount = count.bind(number);

boundCount();
