//  import { largeNumber } from "./main.js";

// const b = 5;

// console.log(largeNumber + b);




// exercise 2

// const http = require('http')

// const server = http.createServer()
// const port = 3000
// const host ='localhost'

// function sayHello(){
//     console.log('Server is runing on port', port)
// }

// server.listen(port,host,sayHello)

// or
// const http = require('http')

// const server = http.createServer()
// const port = 3000
// const host ='localhost'


// server.listen(port,host,sayHello){
//     console.log('Server is runing on port', port)
// }
// exercise 2 (3 -4)

// const http = require('http')
// const {largeNumber} = require('./main.js')
// const server = http.createServer(handleResponse)
// const port =3000
// const host = localhost

// function handleResponse(req, res){
//     res.setHeader('content-type', 'text/html')
//     res.writeHead(201)
//     res.end(`<h1>response from server</h1>
//             <p>the large number is ${largeNumber}</p>`)
// }

// server.listen(port,host,function(){
//     console.log('server is running on port' port)
// })

// exercise 3

const http = require("http");
const { largeNumber, getCurrentDate } = require("./main.js");
const server = http.createServer(handleRequest);
const port = 3000;
const host = "localhost";

server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});

function handleRequest(req, res) {
  res.setHeader('Content-Type', 'text/html');
  res.writeHead(201);
  res.end(`
    <p>The date and time are: ${getCurrentDate()}<p>
  `);
}
