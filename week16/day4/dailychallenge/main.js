// const express = require('express')
// const app = express()

// const PORT =3001

// function sayHi(req,res){
//     res.send('hello from express')
// }

// app.get('/Api/hello', sayHi)

// app.listen(PORT,() => {
//     console.log('Listening on port: ', PORT)
// })

// exercise

// app.get('/Api/hello', (req,res)=> res.send('hello from express'))

// app.listen(PORT,() => {
//     console.log('Listening on port: ', PORT)
// })


// exercise

// const express = require('express')
// const app = express()
// const cors = require('cors')

// const PORT =3001
// app.use(cors())

// app.get('/Api/hello', (req,res)=> res.send('hello from express'))

// app.listen(PORT,() => {
//     console.log('Listening on port: ', PORT)
// })


// hay q correr este main y luego ir al week16/day4/xpdaily y correrlo, osea 2 servidores 
// corriendo al mismo tiempo

const express = require('express')
const app = express()
const cors = require('cors')

const PORT =3001
app.use(cors())
app.use(express.json())

app.get('/Api/hello', (req,res)=> res.send('hello from express'))
app.post('/api/world', (req,res)=>{
 res.send({ message: `i recived you post request. this is what you send me: ${req.body.message}`})  
})

app.listen(PORT,() => {
    console.log('Listening on port: ', PORT)
})