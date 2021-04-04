const express = require('express');
const app = express();
const cors = require('cors')

app.use(cors());
app.use(express.json());


//ROUTES
const studentsRoute = require('./routes/students');
app.use('/students', studentsRoute);

const coursesRoute = require('./routes/courses');
app.use('/courses', coursesRoute);

const activitiesRoute = require('./routes/activities');
app.use('/activities', activitiesRoute);

const studentCourseRoute = require('./routes/studentcourse');
app.use('/studentcourse', studentCourseRoute);

const studentActivitiesRoute = require('./routes/studentactivities');
app.use('/studentactivities', studentActivitiesRoute);



//Listen
app.listen(process.env.PORT || PORT, () => {
    console.log("Running application");
});