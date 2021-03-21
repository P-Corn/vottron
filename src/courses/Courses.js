import React, {useState, useEffect} from 'react';
import {Container, Typography, Button, Grid} from '@material-ui/core';
import CourseCard from './CourseCard';
import './Courses.css';
import AddCourseModal from './AddCourseModal';
import Axios from 'axios';
import {BrowserRouter as Router, Link, Route } from 'react-router-dom';


function Courses() {

  const [openModal, setOpenModal] = React.useState(false);
  const [courseData, setCourseData] = React.useState([])
  
  const handleOpen = () => {
    setOpenModal(true);
  }

  const handleClose = () => {
    setOpenModal(false);
  }

  const getCourse = () => {
    Axios.get("http://localhost:3001/courses").then((response) => {
      const data = response.data;
      setCourseData([...data]);
    })
  }

  useEffect (() => {
    getCourse();
  }, [])

  return (
    <div className="pageBg">
      <div className="content-wrapper">
        <Container 
          maxWidth='lg'
        >
          <Grid 
            justify="space-between" 
            alignItems="center" 
            container
          >
            <Typography variant="h4">
              Courses
            </Typography>
            <Button
            variant="contained"
            color="primary"
            onClick={handleOpen}
            >
              Add course
            </Button>
          </Grid>

          <AddCourseModal
            openModal={openModal}
            handleClose={handleClose}
          ></AddCourseModal>

          <hr></hr>
            <Grid
            container
            spacing={6}
            >
              {courseData.map((course) => 
                <Grid xs={12} sm={6} md={4} item key={course.courseid}>
                  <CourseCard
                    courseId={course.courseid}
                    courseTitle={course.coursetitle}
                    courseDesc={course.coursedescription}
                    courseImg={course.courseimage}
                  ></CourseCard>
                </Grid>
              )}
            </Grid>
        </Container>
      </div>
    </div>
  );
}

export default Courses;