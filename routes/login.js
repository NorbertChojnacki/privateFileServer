const { create } = require("domain")
const express = require("express")
const {body, check,validationResult} = require("express-validator")
const router = express.Router()
const multer = require("multer")
const {join} = require("path")

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
    check("registerPassword", "Za slabe haslo").isLength({min: 3}).custom((value,{req})=>{
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
                status: "error",
                msg: error.msg
            }
        }
    })

    const message = myValidationResult(req)
    if(!message.isEmpty()) return res.status(200).json(message.array()[0])

    const createNewUser = require(join(__dirname,"../db/createNewUser"))

    createNewUser(req.body.registerEmail, req.body.registerPassword).then(result=>{
        if(result.isError()){
            res.status(200).json(result.showErr()[0])
        } else{
            res.status(200).json({status: "done", msg: "Zarejestrowano"}).end()
        }

    })

})

module.exports = router