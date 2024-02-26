// DEPENDENCIES
const app = require('./app.js')

// CONFIGURATION
require('dotenv').config()
const PORT = process.env.PORT || 3003;

// LISTEN
app.listen(3333);