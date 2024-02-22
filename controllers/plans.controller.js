const express = require("express")

const  serviceType = express.Router()

const  serviceTypeArr = require('../controllers/plans.controller.js')

serviceType.get('/', (req, res) => {
    res.json({status: serviceTypeArr})
})

module.exports = serviceType