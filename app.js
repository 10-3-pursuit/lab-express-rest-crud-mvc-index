const express = require('express')

const app = express()



// ROUTES
app.get('/', (req, res) => {
    res.send('"Hello, world!"')
  })
  

  module.exports = app