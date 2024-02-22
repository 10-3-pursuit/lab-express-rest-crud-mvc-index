// Dependencies
const express = require('express');

// Config
const app = express();

// Routes
app.get('/',(req, res) => {
    res.json({'message':'Hello, world!'});
})

// Export
module.exports = app;