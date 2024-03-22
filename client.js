const net = require ("net");

//establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: "10.0.0.9",
    port: 50541

  });
  //interpret incoming data as text
  conn.setEncoding("utf-8");

  conn.on("data", (data) => {
    console.log(data);
  })

  conn.on("connect", () => {
    console.log("Successfully connected to game server")

    //set timer delay of 50ms
    // let delay = 0;
    // setInterval(() => {
      
    //   conn.write("Move: up")
      

    // }, delay + 50);
   
  });

  conn.write ("Name: mdz");

  return conn

};

module.exports ={
  connect
}