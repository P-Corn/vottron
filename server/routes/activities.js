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

router.post('/studentactivities', (req, res) => {
    const ogactivityid = req.body.activityid;
    const activitytitle = req.body.activitytitle;
    const activitydescription = req.body.activitydescription;
    const courseid = req.body.studentId;
    const activityorder = req.body.activityorder;
    const completed = req.body.completed;
    
    db.query(
        'INSERT INTO studentactivities (activitytitle, activitydescription, courseid, ogactivityid, activityorder, completed) VALUES (?,?,?,?,?,?)',
        [activitytitle, activitydescription, courseid, ogactivityid, activityorder, completed],
        (err, result) => {
            if (err) console.log(err)
            else res.send(result)
        }
    )
})

router.post('/', (req, res) =>{
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
});

router.get('/:id', (req, res) => {
    const courseId = req.query.id;

    const query = "SELECT * FROM activities WHERE courseid = (?)"
    
    db.query(
        query, [courseId],
        (err, result) => {
            if (err) console.log(err)
            else res.send(result)
        }
    )
})

router.post('/update', (req, res) =>{
    const activityId = req.body.activityId;
    const activityTitle = req.body.activityTitle;
    const activityDesc = req.body.activityDesc;
    const courseId = req.body.courseId;
    const activityOrder = req.body.activityOrder;
    
    db.query(
        'UPDATE activities SET activitytitle=(?), activitydescription=(?), activityorder=(?) where activityid=(?)',
        [activityTitle, activityDesc, activityOrder, activityId],
        (err, result) => {
            if (err) console.log(err)
            else res.send(result)
        }
    )
});

router.post('/studentactivities', (req, res) =>{
    const activityId = req.body.activityId;
    const activityTitle = req.body.activityTitle;
    const activityDesc = req.body.activityDesc;
    const courseId = req.body.courseId;
    const activityOrder = req.body.activityOrder;
    
    db.query(
        'UPDATE activities SET activitytitle=(?), activitydescription=(?), activityorder=(?) where activityid=(?)',
        [activityTitle, activityDesc, activityOrder, activityId],
        (err, result) => {
            if (err) console.log(err)
            else res.send(result)
        }
    )
});

// 'SELECT * FROM activities WHERE courseid = (?)',[courseId],

// router.get('/:id', (req, res) => {
//     const activityId = req.query.id;

//     console.log(req, activityId)
    
//     db.query(
//         query, [courseId, courseId],
//         (err, result) => {
//             if (err) console.log(err)
//             else res.send(result)
//         }
//     )
// })

module.exports = router;