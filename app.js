const express = require('express')

const app = express()

const locationsController = require('./controllers/locations.controller.js')
const machinesController = require('./controllers/machines.controller.js')
const personsController = require('./controllers/persons.controller.js')
const plansController = require('./controllers/plans.controller.js')


app.use('/locations', locationsController)
app.use('/equipment', machinesController)
app.use('/people', personsController)
app.use('/plans', plansController)


app.get('/', (req,res) => {
    res.send('Hello World')
})

app.get('*', (req, res) => {
    res.json({ error: 'Page not found' })
})

module.exports = app