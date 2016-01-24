var Letter = require('./letter.js')

function Word(val){
  this.word = val;
  this.letters = [];
  this.found = false;
  this.getLets = function(){
    for(var i = 0; i < this.word.length; i++){
      this.letters.push(new Letter(this.word.charAt(i)))
    }
  }
  this.checkIfLetterFound = function(guess){
    for(var i = 0; i < this.letters.length; i++){
      if(letters[i].value === guess){
        letters.[i].appear = true;
      }
    }
  }
  this.didWeFindTheWord = this.letters.every(function (curLetter){
    return curLetter.appear
  });
  this.wordRender = function() {
    var str = ""
    for(var i = 0; i < this.letters.length; i++){
      str.concat(this.letters[i].letterRender)
    }
    return str
  }
}
module.exports = Word;