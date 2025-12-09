let express = require('express');
let app = express();

console.log("Hello World");

app.get('/', (req, res) => {

    absolutePathc = __dirname + "/views/index.html"
    res.sendFile(absolutePathc)
})






















module.exports = app;
