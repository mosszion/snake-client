const connect = require("./client")  //import the connect function 

// print this message on the terminal while connecting
console.log("Connecting ...");
connect(); //function connect is used

// setup interface to handle user input from stdin

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};




const handleUserInput = function(key) {

  // \u0003 maps to ctrl+c input
if (key === '\u0003') {
  process.exit();
}
};


setupInput();





