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
