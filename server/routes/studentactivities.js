const express = require('express');
const router = express.Router();
const mysql = require('mysql');

const db = mysql.createConnection({
    user: 'beab2034f2f86f',
    host: 'us-cdbr-east-03.cleardb.com',
    password: '7e586936',
    database: 'heroku_ca1036d4ad3a914',
    multipleStatements: true
});

router.get('/:id', (req, res) => {
    const courseid = req.query.id;
    
    db.query(
        'SELECT * FROM studentactivities WHERE courseid = (?)',
        [courseid],
        (err, result) => {
            if (err) console.log(err)
            else res.send(result)
        }
    )
})

module.exports = router;