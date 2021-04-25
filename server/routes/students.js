const express = require('express');
const router = express.Router();
const getData = require('../database')

router.get('/', (req,res) => {
    const query = 'SELECT * FROM students'

    getData(query)
    .then(data => res.send(data))
    .catch(err => console.error(err))
});

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

    const query = 'INSERT INTO students (studentid, firstname, lastname, adminnotes,\
        course, studentdob, enrolldate, active, weekday) VALUES (?,?,?,?,?,?,?,?,?)'
    const variables = [studentId, firstName, lastName, adminNotes, course, dob, enrollDate,active, weekDay]

    getData(query, variables)
    .then(data => res.send(data))
    .catch(err => console.error(err))
});

router.get('/:id', (req, res) => {
    const studentId = req.query.id;

    const query = 'SELECT * FROM students WHERE studentid = (?)'
    const variables = [studentId]

    getData(query, variables)
    .then(data => res.send(data))
    .catch(err => console.error(err))
});

router.post('/update', (req, res) =>{
    const studentId = req.body.idVal;
    const firstName = req.body.firstNameVal;
    const lastName = req.body.lastNameVal;
    const adminNotes = req.body.notesVal;
    const course = req.body.courseVal;
    const active = req.body.activeVal;
    const dob = req.body.dobVal;

    const query = 'UPDATE students SET firstname = (?), lastname = (?), adminnotes = (?), course=(?), active=(?), studentdob=(?) where studentid = (?)'
    const variables = [firstName, lastName, adminNotes, course, active, dob, studentId]

    getData(query, variables)
    .then(data => res.send(data))
    .catch(err => console.error(err))
});

router.post('/course', (req, res) =>{
    const course = req.body.courseTitle;
    const ogcourse = req.body.title;

    const query = 'UPDATE students SET course = (?) WHERE course = (?)'
    const variables = [course, ogcourse]

    getData(query, variables)
    .then(data => res.send(data))
    .catch(err => console.error(err))
});

router.post('/delete', (req, res) =>{
    const studentId = req.body.id;

    const query = "DELETE from students where studentid = (?);"
    let variables = [studentId];

    getData(query, variables)
    .then(data => res.send(data))
    .catch(err => console.error(err))
});

module.exports = router;