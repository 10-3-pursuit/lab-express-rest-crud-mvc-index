const express = require('express')

const app = express()

const locationsController = require('./controllers/locations.controller')
const machinesController = require('./controllers/machines.controller')
const plansController = require('./controllers/plans.controller')
const peopleController = require('./controllers/persons.controller')

//middleware, using the locationscontroller routes with the base url
app.use('/locations', locationsController)
app.use('/equiptment', machinesController)
app.use('/plans', plansController)
app.use('/people', peopleController)

//routes
app.get('/', (req, res) => {
    res.send("Hello, world!")
})

//404
app.get('*', (req, res) => {
    res.json({ error: "Sorry, no page found!" });
})
module.exports = app