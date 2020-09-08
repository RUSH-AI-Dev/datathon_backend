const express = require("express");
const app = express();
const cors = require("cors")
const bodyParser = require("body-parser")

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(cors())
app.use(express.static(__dirname + "/uploaded"))

app.use("/api/v2", require("./api"))

app.listen(3000, ()=>{
    console.log("Server is running..")
})