const net = require("net");  //import te net object


const connect = function () {  //define a function connect
  const conn = net.createConnection({   //creates a connection 
    host:'localhost', // IP address here,
    port: 50541 // PORT number here,
    
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  
  //new codes

  conn.on("data", (data) => {   //display data from the server 
    console.log("Server says: ", data);

  });

  conn.on("connect", () => {
    
    console.log("Successfully connected to game server")
  })

  conn.write ("Name: mdz");
  
  // conn.write ("Move: up");
 
 
  let delay = 0;
  setInterval(() => {
    
    conn.write("Move: up")
  }, delay + 50);

  

  return conn; 
};

module.exports = connect; //exports connect function