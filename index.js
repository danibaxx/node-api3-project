// code away!
const express = require('express');
const welcomeRouter = require('./routers/welcome');

const server = express()

server.use(express.json())

server.use('/', welcomeRouter)

server.listen(3000, () => {
  console.log('\n*** Server is running http://localhost:3000 ***\n')
})