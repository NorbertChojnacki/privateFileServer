const express = require("express")
const {body, check,validationResult} = require("express-validator")
const router = express.Router()
const multer = require("multer")

router.use(express.urlencoded({
    extended:true
}))

router.post('/login', multer().none(),[
    check("loginEmail", "Niepoprawny format email").isEmail()
], (req,res)=>{
    res.status(200).json({msg:"Zalogowano"})
})

router.post('/register', multer().none(), 
[
    //* sprawdzanie danych przeslanych przez formularz
    check("registerEmail", "Niepoprawny format Email").isEmail(),
    check("registerPassword", "Za slabe haslo").custom((value,{req})=>{
        if(value !== req.body.registerPasswordConfirm){
            throw new Error("Hasla nie pasuja") 
        }else {
            return value
        }
    })//! .isStrongPassword() trzeba to odchaczyc kiedy bedzie w sieci
    ,check("registerInvitationCode", "Niepoprawny format kodu zaproszenia").isInt(),
    body("registerEmail").normalizeEmail()
],
(req,res)=>{
    //* Stworzenie validatora ktory zwraca tylko wiadomosc
    const myValidationResult = validationResult.withDefaults({
        formatter: error =>{
            return {
                msg: error.msg
            }
        }
    })

    const message = myValidationResult(req)

    if(!message.isEmpty()) return res.status(400).json({errors: message.array()})

    res.status(200).json({msg: "Zarejestrowano"}).end()
})

module.exports = router