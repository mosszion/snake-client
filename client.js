const net = require ("net");
const {IP, PORT} = require ("./constants");


const port =  PORT;
const host = IP;

//establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
     host , 
     port ,

  });
  //interpret incoming data as text
  conn.setEncoding("utf-8");

  conn.on("data", (data) => {
    console.log(data);
  })

  conn.on("connect", () => {
    console.log("Successfully connected to game server")

   
  });

  conn.write ("Name: mdz");

  return conn;

};

module.exports ={
  connect
}