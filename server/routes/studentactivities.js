const express = require('express');
const router = express.Router();
const mysql = require('mysql');

const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: 'MyPrequel9186',
    database: 'vottron',
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