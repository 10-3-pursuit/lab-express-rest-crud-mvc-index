const express = require("express") 

const app = express()


const userLocations = require("./controllers/location.controller.js")
const userMachines = require("./controllers/machines.controller.js")
const user = require("./controllers/persons.controller.js")
const serviceType = require("./controllers/plans.controller.js")

app.use('/api/location', userLocations)
app.use('/api/machines', userMachines)
app.use('/api/persons', user)
 app.use('/api/plans', serviceType)

app.get('/', (req, res) => {
    res.send("Initialized App")
})

app.get('*', (req, res) => {
    res.send("Sorry, no page found!")
})

module.exports = app