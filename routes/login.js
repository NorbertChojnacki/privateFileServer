const express = require("express")
const {body, validationResult} = require("express-validator")
const router = express.Router()
const multer = require("multer")

// router.post('/login', (req,res)=>{

// })


router.post('/register', multer().none() ,(req,res)=>{

    console.log(JSON.stringify(req.body))
    res.status(400)
    res.send("blablabla")
    res.end()
})

module.exports = router