const express = require("express")

const  serviceType = express.Router()

const  serviceTypeArr = require('../models/plans.models.js')

serviceType.get('/', (req, res) => {
    res.json({status: serviceTypeArr})
})

module.exports = serviceType