const express = require('express');
const router = express.Router();
const getData = require('../database')

router.get('/:id', (req, res) => {
    const courseid = req.query.id;

    const query = 'SELECT * FROM studentactivities WHERE courseid = (?) ORDER BY activityid ASC'
    let variables = [courseid];

    getData(query, variables)
    .then(data => res.send(data))
    .catch(err => console.error(err))
});


router.post('/update', (req, res) =>{
    const activityId = req.body.activityId;
    const activityTitle = req.body.activitytitle;
    const activityDesc = req.body.activitydescription;
    const activitySolution = req.body.activitysolution;
    const activityOrder = req.body.activityOrder;

    const query = 'UPDATE studentactivities SET activitytitle=(?), activitydescription=(?), activitysolution=(?), activityorder=(?) where ogactivityid=(?)'
    let variables = [activityTitle, activityDesc, activitySolution, activityOrder, activityId];

    getData(query, variables)
    .then(data => res.send(data))
    .catch(err => console.error(err))
});

router.post('/delete', (req, res) =>{
    const activityId = req.body.activityId;

    const query = "DELETE from studentactivities where ogactivityid = (?);"
    let variables = [activityId];

    getData(query, variables)
    .then(data => res.send(data))
    .catch(err => console.error(err))
});

module.exports = router;