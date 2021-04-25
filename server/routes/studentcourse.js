const express = require('express');
const router = express.Router();
const getData = require('../database')

router.get('/:id', (req, res) => {
    const courseid = req.query.id;

    const query = 'SELECT * FROM studentcourses WHERE courseid = (?)'
    let variables = [courseid];

    getData(query, variables)
    .then(data => res.send(data))
    .catch(err => console.error(err))
});

router.get('/original/:id', (req, res) => {
    const courseid = req.query.id;

    const query = 'SELECT * FROM studentcourses WHERE ogcourseid = (?)'
    let variables = [courseid];

    getData(query, variables)
    .then(data => res.send(data))
    .catch(err => console.error(err))
});

router.post('/update', (req, res) => {
    const ogCourseId = req.body.courseId;
    const courseTitle = req.body.courseTitle;
    const courseDesc = req.body.courseDesc;
    const courseImg = req.body.courseImg;

    const query = 'UPDATE studentcourses SET coursetitle = (?), coursedescription = (?), courseimage = (?) WHERE ogcourseid = (?)'
    let variables = [courseTitle, courseDesc, courseImg, ogCourseId];

    getData(query, variables)
    .then(data => res.send(data))
    .catch(err => console.error(err))
})

module.exports = router;