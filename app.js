const express = require("express")
const http = require("http")
const https = require("https")
const expressSession = require("express-session")
const path = require("path")
require("dotenv").config()

//* Routery
const loginRouter = require("./routes/login")
    app.use('/loginRegisterForms', loginRouter)


const PORT = process.env.PORT || 80

const app = express()

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
    http.createServer(app).listen(PORT)

    console.log(`Serwer nasluchuje na porcie: ${PORT}`)
}