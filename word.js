var Letter = require('./letter.js')

function Word(val){
  this.word = val;
  this.letters = [];
  this.found = false;
  this.getLets = function(){
    for(var i = 0; i < this.word.length; i++){
      this.letters.push()
    }
  }
}