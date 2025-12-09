let dotenv = require('dotenv').config()
let express = require('express');
let app = express();



app.use("/public", express.static(__dirname + "/public"))

app.get("/", (req, res) => {
    absolutePath = __dirname + "/views/index.html"
    res.sendFile(absolutePath)
})


app.get("/json", (req, res) => {
    message = process.env.MESSAGE_STYLE
    text = "Hello json"
    if (message == message.toUpperCase()) {
        res.json({ "message": text.toUpperCase() })
    } else  {
        res.json({ "message": text })
    }


})
console.log("Hello World");

















module.exports = app;
