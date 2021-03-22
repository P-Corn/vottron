import React, {useEffect, useState} from 'react';
import {Container, Typography, Button, Grid} from '@material-ui/core';
import { useRouteMatch } from "react-router-dom";
import Axios from 'axios';


function CourseDashboard() {

  const [courseData, setCourseData] = useState({})

  const url = useRouteMatch("/courses/:id");
  const id = url.params.id;

  const getCourseDetails = (id) => {
    Axios.get('http://localhost:3001/courses/:id', {
      params: {
        id
      }
    }).then((response) => {
      setCourseData({...response.data[0]});
      console.log(courseData);
    })
  }

  useEffect(() => getCourseDetails(id), [])

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
              {courseData.coursetitle}
            </Typography>
            <Button
            variant="contained"
            color="primary"
            >
              Add course
            </Button>
          </Grid>
        </Container>
      </div>
    </div>
  );
}

export default CourseDashboard;