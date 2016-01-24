var prompt = require('prompt');
var Word = require('./word.js')

prompt.start()

var words = ["crypt","pterodactyl", "vinyl"]
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
    this.keepPrompting();
  }
  this.keepPrompting = function(){
    var self = this;
    console.log(self.currentWrdDisplay)
    prompt.get(['guess'], function (err, result){
      if(self.currentWrd.checkIfLetterFound(result.guess) === 0){
        self.guessesRemaining--;
        console.log("No Dice")
      }
      console.log(self.currentWrd.wordRender())
      console.log(self.currentWrdDisplay)

      console.log()
      if(result.guess === "stop"){

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
      else if(self.guessesRemaining > 0){
        console.log(self.guessesRemaining)
        self.keepPrompting();
      }
      else{
        console.log("Game Over")
      }
    });

  }
}
var game = new Game()
game.startGame()
