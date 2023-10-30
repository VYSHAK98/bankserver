//import .env file
require('dotenv').config()

// server creation
//express

// 1-import express
const express=require('express')

const router = require('./routes/router')
const cors= require('cors')

// 2 create server using express
const server=express()

// to integrate with front-end
server.use(cors())

// to convert all files to json
server.use(express.json())

//router set
server.use(router)

//import connection.js file
require('./db/connection')

// 3 - run server

//set port
const port=4001 || process.env.port

server.listen(port,()=>{
    console.log(`___________server started at port number ${port}_________......`);
})

// example api calls resolve  --post
// server.post('/signup',(req,res)=>{
//     res.send("post method working")
// })

// server.post('/login',(req,res)=>{
//     console.log(req.body.acno);
//     console.log(req.body.psw);
//     res.send("login worked")
// })

// server.get('/getexc',(req,res)=>{
//     res.send("get worked")
// })

