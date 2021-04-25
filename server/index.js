const express = require('express');
const app = express();
const cors = require('cors');

const whitelist = ['http://localhost:3000', 'https://www.peytoncornelison.com']
const corsOptions = {
  origin: (origin, callback) => {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}

app.use(cors(corsOptions));
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

const studentCommentsRoute = require('./routes/studentcomments');
app.use('/studentcomments', studentCommentsRoute);



//Listen
app.listen(process.env.PORT || PORT, () => {
    console.log("Running application");
});