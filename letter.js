function Letter(val){
  this.value = val;
  this.appear = false;
  this.letterRender = function () {
    if(this.appear){
      return this.value
    }
    else {
      return " ";
    }
  }
}
module.exports = Letter;