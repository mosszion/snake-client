const {connect} = require("./client")  //import the connect function 
const {setupInput} = require("./input")  //import the connect function 

// print this message on the terminal while connecting
console.log("Connecting ...");
connect(); //function connect is used

setupInput(); //function checks for any inputs


