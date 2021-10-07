const express = require("express")
const http = require("http")
const https = require("https")
const expressSession = require("express-session")
require("dotenv").config()

const PORT = process.env.PORT || 80

const app = express()

app.get("/", (req, res)=>{
    res.send("hello worlds")
})


if(process.env.HTTPS === "true"){
    console.log("https")
}else{
    http.createServer(app).listen(PORT)

    console.log(`Serwer nasluchuje na porcie: ${PORT}`)
}