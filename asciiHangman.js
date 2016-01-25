//   _______
//  |/      |
//  |      (_)
//  |      \|/
//  |       |
//  |      / \
//  |
// _|___
var output = ""//"  _______" + "\r\n" + " |/      |" + "\n\r" + " |      (_)" + "\n\r" + " |      \\|/" + "\n\r" + " |       |" + "\n\r" + " |      / \\ " + "\n\r" + " |"

function display(num){
  var output = ""
  switch(num){
    case 10:
      output = "  _______" + "\r\n" + " |/      " + "\n\r" + " |      " + "\n\r" + " |      " + "\n\r" + " |       " + "\n\r" + " |      " + "\n\r" + " |"
      console.log(output)
      break;
    case 9:
      output = "  _______" + "\r\n" + " |/      |" + "\n\r" + " |      " + "\n\r" + " |      " + "\n\r" + " |       " + "\n\r" + " |      " + "\n\r" + " |"
      console.log(output)
      break;
    case 8:
      output = "  _______" + "\r\n" + " |/      |" + "\n\r" + " |      (" + "\n\r" + " |      " + "\n\r" + " |       " + "\n\r" + " |      " + "\n\r" + " |"
      console.log(output)
      break;
    case 7:
      output = "  _______" + "\r\n" + " |/      |" + "\n\r" + " |      (_" + "\n\r" + " |      " + "\n\r" + " |       " + "\n\r" + " |      " + "\n\r" + " |"
      console.log(output)
      break;
    case 6:
      output = "  _______" + "\r\n" + " |/      |" + "\n\r" + " |      (_)" + "\n\r" + " |      " + "\n\r" + " |       " + "\n\r" + " |      " + "\n\r" + " |"
      console.log(output)
      break;
    case 5:
      output = "  _______" + "\r\n" + " |/      |" + "\n\r" + " |      (_)" + "\n\r" + " |      \\" + "\n\r" + " |       " + "\n\r" + " |      " + "\n\r" + " |"
      console.log(output)
      break;
    case 4:
      output = "  _______" + "\r\n" + " |/      |" + "\n\r" + " |      (_)" + "\n\r" + " |      \\|" + "\n\r" + " |       " + "\n\r" + " |      " + "\n\r" + " |"
      console.log(output)
      break;
    case 3:
      output = "  _______" + "\r\n" + " |/      |" + "\n\r" + " |      (_)" + "\n\r" + " |      \\|/" + "\n\r" + " |       " + "\n\r" + " |      " + "\n\r" + " |"
      console.log(output)
      break;
    case 2:
      output = "  _______" + "\r\n" + " |/      |" + "\n\r" + " |      (_)" + "\n\r" + " |      \\|/" + "\n\r" + " |       |" + "\n\r" + " |      " + "\n\r" + " |"
      console.log(output)
      break;
    case 1:
      output = "  _______" + "\r\n" + " |/      |" + "\n\r" + " |      (_)" + "\n\r" + " |      \\|/" + "\n\r" + " |       |" + "\n\r" + " |      /  " + "\n\r" + " |"
      console.log(output)
      break;
    case 0:
      output = "  _______" + "\r\n" + " |/      |" + "\n\r" + " |      (_)" + "\n\r" + " |      \\|/" + "\n\r" + " |       |" + "\n\r" + " |      / \\ " + "\n\r" + " |"
      console.log(output)
      break;

  }
}
module.exports = display;
