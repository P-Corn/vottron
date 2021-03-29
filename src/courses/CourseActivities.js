import React, {useState, useEffect} from 'react';
import {Paper, Typography, Button, Grid} from '@material-ui/core';
import AddActivityModal from './AddActivityModal';
import Axios from 'axios';

function CourseActivities({activityData}) {

  const [openModal, setOpenModal] = useState(false);

  const handleOpen = () => {
    setOpenModal(true);
  }

  const handleClose = () => {
    setOpenModal(false);
  }

  console.log(activityData)
  

  return (
    <Paper 
    elevation={4}
    className="course-dashboard-paper">
      <Grid
      container
      justify="space-between"
      >
        <Grid
        item
        >
          <Typography 
          className="dashboard-card-title" 
          variant="h5"
          color="primary"
          >
            Course Activities
          </Typography>
        </Grid>
        <Grid
        item
        >
          <Button
          color="primary"
          variant="contained"
          onClick={handleOpen}
          >
            Add Activity
          </Button>
        </Grid>
      </Grid>

      <AddActivityModal
        openModal={openModal}
        handleClose={handleClose}
      />

      <ul>
        {activityData.map((activity) => (
          <li>{activity.activitytitle} / {activity.activitydescription}<hr></hr></li>
        ))}
      </ul>
    </Paper>
  ); 
}

export default CourseActivities;