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

router.post('/studentcourse', (req, res) => {
    const courseid = req.body.studentId;
    const coursetitle = req.body.coursetitle;
    const coursedescription = req.body.coursedescription;
    const courseimage = req.body.courseimage;
    const ogcourseid = req.body.courseid;
    
    db.query(
        'INSERT INTO studentcourses (courseid, coursetitle, coursedescription, courseimage, ogcourseid) VALUES (?,?,?,?,?)',
        [courseid, coursetitle, coursedescription, courseimage, ogcourseid],
        (err, result) => {
            if (err) console.log(err)
            else res.send(result)
        }
    )
})

router.get('/coursetitles', (req, res) => {
    
    db.query(
        'SELECT courseid, coursetitle, coursedescription, courseimage FROM courses;',
        (err, result) => {
            if (err) console.log(err)
            else res.send(result)
        }
    )
})

router.get('/', (req,res) => {
    db.query("SELECT * FROM courses", (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send(result)
        }
    })
})

router.post('/', (req, res) =>{
    const courseid = req.body.courseId;
    const coursetitle = req.body.courseTitle;
    const coursedescription = req.body.courseDesc;
    const courseimage = req.body.courseImg;

    db.query(
        'INSERT INTO courses (courseid, coursetitle, coursedescription, courseimage) VALUES (?,?,?,?)', 
        [courseid, coursetitle, coursedescription, courseimage], 
        (err, result) => {
            if (err) {
                console.log(err)
            } else {
                res.send(result)
            }
        } 
    );
});

// 'SELECT * FROM activities WHERE courseid = (?)',[courseId],

router.get('/:id', (req, res) => {
    const courseId = req.query.id;

    const query = "SELECT * FROM courses WHERE courseid = (?);"
    
    db.query(
        query, [courseId, courseId],
        (err, result) => {
            if (err) console.log(err)
            else res.send(result)
        }
    )
})

router.post('/:id', (req, res) => {
    const courseId = req.body.courseId;
    const courseTitle = req.body.courseTitle;
    const courseDesc = req.body.courseDesc;
    const courseImg = req.body.courseImg;
    
    db.query(
        'UPDATE courses SET coursetitle = (?), coursedescription = (?), courseimage = (?) where courseid = (?)',
        [courseTitle, courseDesc, courseImg, courseId],
        (err, result) => {
            if (err) console.log(err)
            else res.send(result)
        }
    )
})

router.post('/:id/activities', (req, res) => {
    const activityId = req.body.activityId;
    const activityTitle = req.body.activityTitle;
    const activityDesc = req.body.activityDesc;
    const courseId = req.body.courseId;
    const activityOrder = req.body.activityOrder;
    
    db.query(
        'INSERT INTO activities (activityid, activitytitle, activitydescription, courseid, activityorder) VALUES (?,?,?,?,?)',
        [activityId, activityTitle, activityDesc, courseId, activityOrder],
        (err, result) => {
            if (err) console.log(err)
            else res.send(result)
        }
    )
})

module.exports = router;