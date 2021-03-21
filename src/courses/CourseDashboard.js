import React from 'react';
import {Container, Typography, Button, Grid} from '@material-ui/core';
import { useRouteMatch } from "react-router-dom";


function CourseDashboard() {

  const url = useRouteMatch("/courses/:id");
  const id = url.params.id;

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
              Courses {id}
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