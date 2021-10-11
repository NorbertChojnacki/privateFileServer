const conn = require("./connection")
const {join} = require("path")
const dbRequestClass = require(join(__dirname, "../modules/dbRequestClass"))

const result = new dbRequestClass()

async function checkUserExist(email){
    let sql = await conn.query(`SELECT * FROM user WHERE email LIKE "${email}"`)
    sql.pop()

    return sql.length > 0 ? false : true
}
/**
 * 
 * @param {String} email 
 * @param {String} password
 * @returns {Promise} Object 
 */
async function createNewUser(email, password){
    try{
        let a = await checkUserExist(email)
        if(a){
            require("../modules/passwordHashing")(password).then(val=>{
                let sql = conn.query(`INSERT INTO user (email, password) VALUES ('${email}','${val}')`)
                result.addRes(sql)
            })
            
        }else{
            throw new Error("userExist")
        }
    }catch(err){
        result.addErr()
        result.addRes({status: "error", msg: err.message === "userExist"? "Uzytkownik o podanym email juz istnieje" :"Blad zapytania dodawania nowego uzytkownika"})
    }finally{
        return result
        if(conn) return conn.end()
        
    }   
}

module.exports = createNewUser