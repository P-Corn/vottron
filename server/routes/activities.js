const express = require('express');
const router = express.Router();
const getData = require('../database')

router.post('/delete', (req, res) =>{
    const activityId = req.body.activityId;

    const query = "DELETE from activities where activityid = (?);"
    let variables = [activityId];

    console.log(activityId)

    getData(query, variables)
    .then(data => res.send(data))
    .catch(err => console.error(err))
});

router.post('/studentactivities', (req, res) => {
    const ogactivityid = req.body.activityid;
    const activitytitle = req.body.activitytitle;
    const activitydescription = req.body.activitydescription;
    const activitysolution = req.body.activitysolution;
    const courseid = req.body.studentId;
    const activityorder = req.body.activityorder;
    const completed = req.body.completed;

    let query = 'INSERT INTO studentactivities (activitytitle, activitydescription, activitysolution, courseid, ogactivityid, activityorder, completed) VALUES (?,?,?,?,?,?,?)';
    let variables = [activitytitle, activitydescription, activitysolution, courseid, ogactivityid, activityorder, completed]
    
    getData(query, variables)
    .then(data => res.send(data))
    .catch(err => console.error(err))
})

router.post('/', (req, res) =>{
    const activityTitle = req.body.activityTitle;
    const activityDesc = req.body.activityDesc;
    const activitySolution = req.body.activitySolution;
    const courseId = req.body.courseId;
    const activityOrder = req.body.activityOrder;

    let query = 'INSERT INTO activities (activitytitle, activitydescription, activitysolution, courseid, activityorder) VALUES (?,?,?,?)';
    let variables = [activityTitle, activityDesc, activitySolution, courseId, activityOrder];

    getData(query, variables)
    .then(data => res.send(data))
    .catch(err => console.error(err))
});

router.get('/:id', (req, res) => {
    const courseId = req.query.id;

    const query = "SELECT * FROM activities WHERE courseid = (?) ORDER BY activityid ASC"
    let variables = [courseId];

    getData(query, variables)
    .then(data => res.send(data))
    .catch(err => console.error(err))
})

router.post('/update', (req, res) =>{
    const activityId = req.body.activityId;
    const activityTitle = req.body.activitytitle;
    const activityDesc = req.body.activitydescription;
    const activitySolution = req.body.activitysolution;
    const activityOrder = req.body.activityOrder;

    const query = "UPDATE activities SET activitytitle=(?), activitydescription=(?), activitysolution=(?), activityorder=(?) where activityid=(?)"
    let variables = [activityTitle, activityDesc, activitySolution, activityOrder, activityId];

    getData(query, variables)
    .then(data => res.send(data))
    .catch(err => console.error(err))
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