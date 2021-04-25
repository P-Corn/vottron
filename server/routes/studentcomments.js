const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const getData = require('../database')

router.get('/:id', (req, res) => {
    const studentId = req.query.id;
    
    const query = 'SELECT * FROM studentcomments WHERE studentid = (?) ORDER BY commentid DESC LIMIT 1'
    let variables = [studentId];

    getData(query, variables)
    .then(data => res.send(data))
    .catch(err => console.error(err))
})

router.post('/', (req, res) => {
    const studentId = req.body.studentId;
    const commentText = req.body.newComment;
    const commentDate = req.body.newDate;

    const query = 'INSERT INTO studentcomments (commenttext, commentdate, studentid) VALUES (?,?,?)'
    let variables = [commentText, commentDate, studentId];

    getData(query, variables)
    .then(data => res.send(data))
    .catch(err => console.error(err))
})

module.exports = router;