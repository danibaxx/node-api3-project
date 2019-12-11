// code away!
const express = require('express');
const logger = require('./middleware/logger');

const server = express()

server.use(logger())
server.use(express.json())

server.listen(3000, () => {
  console.log('\n*** Server is running http://localhost:3000 ***\n')
})