const conn = require("../connection")
const {join} = require("path")
const dbRequestClass = require(join(__dirname, "../modules/dbRequestClass"))

let results = new dbRequestClass()

/**
 * 
 * @param {String} email 
 * @param {String} password
 * @returns {Promise} Object 
 */
async function createNewUser(email, password){

    try{
        let insert = await conn.query(`INSERT INTO user (email, password) VALUES ('${email}','${password}')`)

        dbRequestClass.addRes([insert])
    }catch(err){
        dbRequestClass.addErr(err)
    }finally{
        if(conn) conn.end()
        return dbRequestClass
    }
    
}

module.exports = createNewUser
