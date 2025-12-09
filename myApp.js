let dotenv = require('dotenv').config()
let express = require('express');
let bodyParser = require("body-parser")
let app = express();


app.use(bodyParser.urlencoded({ extended: false }))
app.use("/public", express.static(__dirname + "/public"))



app.use((req, res, next) => {
    console.log(`${req.method} ${req.path} - ${req.ip}`)
    next()
})
app.get("/", (req, res) => {
    absolutePath = __dirname + "/views/index.html"
    res.sendFile(absolutePath)
})


app.get("/json", (req, res) => {
    let message = process.env.MESSAGE_STYLE;
    let text = "Hello json";

    if (message === "uppercase") {
        res.json({ "message": text.toUpperCase() });
    } else {
        res.json({ "message": text });
    }
})


app.get("/now", (req, res, next) => {

    req.time = new Date().toString()

    next()

}, (req, res) => {

    res.json({ "time": req.time })
}
)

app.get("/:word/echo/", (req, res) => {
    const { word } = req.params
    res.json({ "echo": `${word}` })
})
console.log("Hello World");

app.post("/name", (req, res) => {
    const { firstname , lastname } = req.body
    return res.json({ "name": `${firstname} ${lastname}` })
})
















module.exports = app;
