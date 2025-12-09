let express = require('express');
let app = express();

console.log("Hello World");

app.get('/', (req, res) => {

    absolutePathc = __dirname + "/relativePath/file.ext"
    res.sendFile(absolutePathc)
})






















module.exports = app;
