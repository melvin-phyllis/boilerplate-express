let express = require('express');
let app = express();



app.use("/public", express.static(__dirname + "/public"))

app.get("/", (req, res) => {
    absolutePath = __dirname + "/views/index.html"
    res.sendFile(absolutePath)
})


console.log("Hello World");

















module.exports = app;
