const express = require('express');
const router = express.Router();
const mysql = require('mysql');

const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: 'MyPrequel9186',
    database: 'vottron'
});

router.get('/', (req,res) => {
    db.query("SELECT * FROM students", (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send(result)
        }
    })
})

router.post('/', (req, res) =>{
    const studentId = req.body.studentId;
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const adminNotes = req.body.adminNotes;
    const course = req.body.course;
    const dob = req.body.dob;
    const enrollDate = req.body.enrollDate;
    const active = req.body.active;
    const weekDay = req.body.weekDay;

    db.query(
        'INSERT INTO students (studentid, firstname, lastname, adminnotes,\
             course, studentdob, enrolldate, active, weekday) VALUES (?,?,?,?,?,?,?,?,?)', 
        [studentId, firstName, lastName, adminNotes, course, dob, enrollDate,active, weekDay], 
        (err, result) => {
            if (err) {
                console.log(err)
            } else {
                res.send(result)
            }
        } 
    );
});

router.get('/:id', (req, res) => {
    const studentId = req.query.id;

    const query = "SELECT * FROM students WHERE studentid = (?);"
    
    db.query(
        query, [studentId],
        (err, result) => {
            if (err) console.log(err)
            else res.send(result)
        }
    )
});

router.post('/update', (req, res) =>{
    const studentId = req.body.idVal;
    const firstName = req.body.firstNameVal;
    const lastName = req.body.lastNameVal;
    const adminNotes = req.body.notesVal;
    const course = req.body.courseVal;
    const active = req.body.activeVal;
    const dob = req.body.dobVal;

    db.query(
        'UPDATE students SET firstname = (?), lastname = (?), adminnotes = (?), course=(?), active=(?), studentdob=(?) where studentid = (?)', 
        [firstName, lastName, adminNotes, course, active, dob, studentId], 
        (err, result) => {
            if (err) {
                console.log(err)
            } else {
                res.send(result)
            }
        } 
    );
});

module.exports = router;