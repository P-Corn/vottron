const express = require('express');
const router = express.Router();
const getData = require('../database')

router.post('/studentcourse', (req, res) => {
    const courseid = req.body.studentId;
    const coursetitle = req.body.coursetitle;
    const coursedescription = req.body.coursedescription;
    const courseimage = req.body.courseimage;
    const ogcourseid = req.body.courseid;

    const query = 'INSERT INTO studentcourses (courseid, coursetitle, coursedescription, courseimage, ogcourseid) VALUES (?,?,?,?,?)'
    let variables = [courseid, coursetitle, coursedescription, courseimage, ogcourseid];

    getData(query, variables)
    .then(data => res.send(data))
    .catch(err => console.error(err))
})

router.get('/coursetitles', (req, res) => {
    const query = 'SELECT courseid, coursetitle, coursedescription, courseimage FROM courses;'

    getData(query)
    .then(data => res.send(data))
    .catch(err => console.error(err))
})

router.get('/', (req,res) => {
    const query = 'SELECT * FROM courses'

    getData(query)
    .then(data => res.send(data))
    .catch(err => console.error(err))
})

router.post('/', (req, res) =>{
    const courseid = req.body.courseId;
    const coursetitle = req.body.courseTitle;
    const coursedescription = req.body.courseDesc;
    const courseimage = req.body.courseImg;

    const query = 'INSERT INTO courses (courseid, coursetitle, coursedescription, courseimage) VALUES (?,?,?,?)'
    let variables = [courseid, coursetitle, coursedescription, courseimage];

    getData(query, variables)
    .then(data => res.send(data))
    .catch(err => console.error(err))
});

// 'SELECT * FROM activities WHERE courseid = (?)',[courseId],

router.get('/:id', (req, res) => {
    const courseId = req.query.id;

    const query = 'SELECT * FROM courses WHERE courseid = (?)'
    let variables = [courseId];

    getData(query, variables)
    .then(data => res.send(data))
    .catch(err => console.error(err))
})

router.post('/update', (req, res) => {
    const courseId = req.body.courseId;
    const courseTitle = req.body.courseTitle;
    const courseDesc = req.body.courseDesc;
    const courseImg = req.body.courseImg;

    const query = 'UPDATE courses SET coursetitle = (?), coursedescription = (?), courseimage = (?) where courseid = (?)'
    let variables = [courseTitle, courseDesc, courseImg, courseId];

    getData(query, variables)
    .then(data => res.send(data))
    .catch(err => console.error(err))
})

router.post('/:id/activities', (req, res) => {
    const activityTitle = req.body.activityTitle;
    const activityDesc = req.body.activityDesc;
    const activitySolution = req.body.activitySolution;
    const courseId = req.body.courseId;
    const activityOrder = req.body.activityOrder;

    const query = 'INSERT INTO activities (activitytitle, activitydescription, activitysolution, courseid, activityorder) VALUES (?,?,?,?,?)'
    let variables = [activityTitle, activityDesc, activitySolution, courseId, activityOrder];

    getData(query, variables)
    .then(data => res.send(data))
    .catch(err => console.error(err))
})

module.exports = router;