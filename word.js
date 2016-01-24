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
    var check = 0;
    for(var i = 0; i < this.letters.length; i++){
      if(this.letters[i].value === guess){
        this.letters[i].appear = true;
        check++
      }
    }
    return check;
  }
  this.didWeFindTheWord = function (){
    this.found = this.letters.every(function(element, index, array){
      return (element.appear)
    });
    return this.found
  }
  this.wordRender = function() {
    var str = ""
    for(var i = 0; i < this.letters.length; i++){
      str += this.letters[i].letterRender()
    }
    return str
  }
}
module.exports = Word;