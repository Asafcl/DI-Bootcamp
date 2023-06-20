// exercise 1

// var http = require('http');


// // create a server and send a html response

// const server = http.createServer((request, response) => {
//     // console.log(request);
//     response.setHeader('Content-Type', 'text/html');

//      response.write('<h1>This is my first response</h1>');
//      response.write('<h1>This is my second response</h2>');
//      response.write('<p>This is my third response</p>');

//     //response.end('<h3>my first response</h3><p>my first response</p>');
// })
// server.listen(3000);



// exercise 2

// var http = require('http');

// //create a server:
// http.createServer(function (req, res) {

//     const user = {
//         firstname: 'Jonh',
//         lastname: 'Doe'
//     }

//     var myJSON = JSON.stringify(user);

//     res.write(myJSON); //write a response to the client

//     res.end(); //end the response

// }).listen(3000); //the server object listens on port 3000



// exercise 3


var express = require("express");

//var cors = require('cors');

var app = express();

//app.use(cors());


app.get("/", (req, res) => {
    res.send('<h1>This is an HTML tag</h1>');
});


app.listen(3000, () => {
    console.log("Server running on port 3000");
});