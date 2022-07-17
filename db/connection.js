const mysql = require('mysql2')

// Connect to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        // MySQL User Name
        user: 'root',
        // PW
        password: 'Lastday123',
        database: 'election'
    }
)

module.exports = db