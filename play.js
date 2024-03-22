//import setupInput function
const {setupInput} = require("./input");

//import connect function from client

const {connect} = require ("./client");



console.log("connecting...");

const a = connect();


setupInput(a);