const express = require("express")
const http = require("http")
const https = require("https")
const expressSession = require("express-session")
const path = require("path")
const {stringDecompse} = require("./functions")
require("dotenv").config()

const app = express()

//* Konfiguracja sesji
app.use(expressSession({
    secret: stringDecompse(process.env.SESSION_SECRET, process.env.SESSION_SEPARATOR),
    saveUninitialized: false,
    resave: false
}))

//* Routery
const loginRouter = require("./routes/login")
    app.use('*/loginRegisterForms', loginRouter)

//* Zmienne globalne
const PORT = process.env.PORT || 80
const LISTEN_IP = process.env.LISTEN_IP || "127.0.0.1"

app.set("view engine", "ejs")

app.use(express.static(path.join(__dirname, "public")))



app.get("/", (req, res)=>{
    res.render("index")
})

//* Opcje startu serwera
//? W pliku .env trzeba zdecydowac czy ma byc http czy https
if(process.env.HTTPS === "true"){
    console.log("https")
}else{
    console.log(LISTEN_IP)
    http.createServer(app).listen({
        port: PORT,
        hostname: LISTEN_IP
    })

    console.log(`Serwer nasluchuje na porcie: ${PORT}`)
}