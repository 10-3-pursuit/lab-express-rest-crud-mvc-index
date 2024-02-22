const express = require('express')

const app = express()

app.get('/', (req,res) => {
    res.send('Hello World')
})

app.get('*', (req, res) => {
    res.json({ error: 'Page not found' })
})

module.exports = app