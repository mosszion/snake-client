
//stores the active tcp connection object
let connection;
//setup interface to handle user input from stdin

const setupInput = function(conn) {
  connection = conn
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf-8");
  stdin.resume();

  stdin.on("data", handleUserInput);

  return stdin;
};

const handleUserInput = function (data){
  // \u0003 maps to ctrl+c input
if (data === '\u0003') {
  process.exit();
}
//binding w key to up movement
if (data === 'w') {
  connection.write("Move: up");
}
//binding a key to left movement
if (data === 'a') {
  connection.write("Move: left");
}
//binding s key to down movement
if (data === 's') {
  connection.write("Move: down");
}
//binding d key to right movement
if (data === 'd') {
  connection.write("Move: right");
}


};


module.exports = {setupInput};