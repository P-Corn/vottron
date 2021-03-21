import React from 'react';
import {Container, Typography, Button, Grid} from '@material-ui/core';
import {withRouter} from 'react-router-dom';


function CourseDashboard() {

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