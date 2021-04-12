const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const db = require('../database')

router.get('/:id', (req, res) => {
    const studentId = req.query.id;

    db.query(
        'SELECT * FROM studentcomments WHERE studentid = (?) ORDER BY commentid DESC LIMIT 1',
        [studentId],
        (err, result) => {
            if (err) console.log(err)
            else res.send(result)
        }
    )
})

router.post('/', (req, res) => {
    const studentId = req.body.studentId;
    const commentText = req.body.newComment;
    const commentDate = req.body.newDate;

    db.query(
        'INSERT INTO studentcomments (commenttext, commentdate, studentid) VALUES (?,?,?)',
        [commentText, commentDate, studentId],
        (err, result) => {
            if (err) console.log(err)
            else res.send(result)
        }
    )
})

module.exports = router;