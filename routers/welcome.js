const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {
  res.send('<h2>Welcome to the API!</h2>')
})

router.get('/api', (req, res) => {
  res.json({
    message: 'Welcome to the API!'
  })
})

module.exports = router;