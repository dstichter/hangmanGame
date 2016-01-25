var prompt = require('prompt');
var Word = require('./word.js')
var ascii = require('./asciiHangman.js')
var fs = require('fs');
var words = []
fs.readFile('wordBank.txt', 'utf8', function (err, data){
  words = data.split(/\r?\n/);
});

prompt.start()

function Game() {
  this.wordBank = words;
  this.guessesRemaining = 10;
  this.currentWrd = null;
  this.currentWrdDisplay = "";
  this.startGame = function(){
    var random = Math.floor(Math.random() * this.wordBank.length)
    this.currentWrd = new Word(this.wordBank[random])
    this.currentWrd.getLets();
    for(var i = 0; i < this.wordBank[random].length; i++){
      this.currentWrdDisplay += "_ ";
    }
    ascii(10);
    console.log(this.currentWrdDisplay)
    this.keepPrompting();
  }
  this.keepPrompting = function(){
    var self = this;
    prompt.get(['guess'], function (err, result){
      if(result.guess === "stop"){
        return ""
      }
      else if(self.currentWrd.checkIfLetterFound(result.guess) === 0){
        self.guessesRemaining--;
        ascii(self.guessesRemaining)
        console.log(self.currentWrd.wordRender())
        console.log(self.currentWrdDisplay)
        console.log("No Dice")
      }
      else if(self.currentWrd.didWeFindTheWord()){
        console.log("You Win!  Play Again?")
        prompt.get(['yes_no'], function (err, result){
          if(result.yes_no === "yes"){
            game = new Game()
            game.startGame()
          }
        });
      }
      if(self.guessesRemaining > 0){
        ascii(self.guessesRemaining)
        console.log(self.currentWrd.wordRender())
        console.log(self.currentWrdDisplay)
        console.log("Guesses Remaining: " + self.guessesRemaining)
        self.keepPrompting();
      }
      else{
        console.log("Game Over")
      }
    });

  }
}
prompt.get(['Press Any Key To Start'], function (err, result){
  var game = new Game()
  game.startGame()
});

