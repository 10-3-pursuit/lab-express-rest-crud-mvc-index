const express = require("express");
const app = express();

app.get('/',(request, response) => {
    response.send("Yo, Wha ya sayin' World");
});

module.exports = app;
