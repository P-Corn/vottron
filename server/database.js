const mysql = require('mysql');

// const pool = mysql.createPool({
//     connectionLimit: 10,
//     host: 'us-cdbr-east-03.cleardb.com',
//     user: 'beab2034f2f86f',
//     password: '7e586936',
//     database: 'heroku_ca1036d4ad3a914',
//     multipleStatements: true,
//     debug: false
// })

const db = mysql.createConnection({
    user: 'beab2034f2f86f',
    host: 'us-cdbr-east-03.cleardb.com',
    password: '7e586936',
    database: 'heroku_ca1036d4ad3a914',
    multipleStatements: true
});

// db.connect((err) => {
//     if (err) throw err;
// })

module.exports = db;