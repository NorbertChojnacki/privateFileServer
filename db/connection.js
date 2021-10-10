const mariadb = require("mariadb")
const dotenv = require("dotenv").config()

if(dotenv.error){
    throw dotenv.error
}

let pool = mariadb.createPool({
    socketPath:"/run/mysqld/mysqld.sock",
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOST,
    port: 9000,
    connectionLimit: 5
})

pool.getConnection().then(conn=>{
    if(conn) conn.release()
    return
}).catch(err=>{
    if(err) console.error(`Kod bledu mariadb: ${err}`)
})

module.exports = pool