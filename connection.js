const mariadb = require("mariadb")
require("dotenv").config()

/**
 * @name connection
 * @returns {Object} conn
 */
function connection(){
    mariadb.createConnection({
        socketPath:"/run/mysqld/mysqld.sock",
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE
    }).then(conn=>{
        return conn
    })
} 



module.exports = connection()