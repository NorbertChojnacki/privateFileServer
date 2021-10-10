const argon2 = require("argon2")
require("dotenv").config({path: "./.env-local"})

async function passwordHashing(password){ 
    let hash = await argon2.hash(`${password}${process.env.PEPPER}`)
    return hash.match(/p=.*/)[0].substr(2)
}

module.exports = passwordHashing