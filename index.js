const express = require("express")
const mongoose = require("mongoose")
require("dotenv").config()
const PORT = process.env.PORT || 5800
const URI = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/myapp"
const app = express()
app.get("/", (req, res) => {
    return res.send("<h1>welcome to this home page<h1/>")
})


console.log(URI)
console.log("start")

async function Connect() {
    try {
        await mongoose.connect(URI)
        console.log("connected to db")
    } catch (err) {
        console.log(err)
    }
}
Connect()


mongoose.connection.once("open", (err) => {
    if (err) {
        console.log("not set")
    }
    else {

        app.listen(PORT, (err) => {
            if (err) {
                console.log("not running")
            }
            console.log(`listen on port ${PORT}`)
        })
    }
})