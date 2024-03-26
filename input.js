
//stores the active tcp connection object
let connection;

const setupInput = function(conn) {
 
  connection = conn ;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on("data", handelUserInput);

  return stdin;
};

//setup interface to handel user input from stdin

const handelUserInput = function(data){
  console.log(data);
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
  // canned message 
  if (data === '/') {
    connection.write("Say: rko")
  }

};




module.exports = {setupInput};