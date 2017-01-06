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
