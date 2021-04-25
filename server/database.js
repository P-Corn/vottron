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

const pool = mysql.createPool({
    connectionLimit: 10,
    user: 'beab2034f2f86f',
    host: 'us-cdbr-east-03.cleardb.com',
    password: '7e586936',
    database: 'heroku_ca1036d4ad3a914',
    debug: false,
    multipleStatements: true
});

const getData = (query, variables=[]) => new Promise((resolve, reject) => {
    pool.getConnection((err, connection) => {
        if (err) console.error(err);
        console.log('MySQL Connections Established: ', connection.threadId);
        connection.query(query, variables, (err, result) => {
            if (err) console.error(err);
            console.log('User Query Results: ', result);
            resolve(result);
            connection.release(err => { if (err) console.error(err) });
        })
    })
})

// exports.getData = function(callback){
//     pool.getConnection(function(err,connection){
//         if (err) {
//           callback(true);
//           return;
//         }
//         connection.query(query,function(err,results){
//             connection.release();
//             if(!err) {
//                 callback(false, {rows: results});
//             }
//             // check null for results here
//         });
//         connection.on('error', function(err) {
//               callback(true);
//               return;
//         });
//     });
// };

// db.connect((err) => {
//     if (err) throw err;
// })

module.exports = getData;