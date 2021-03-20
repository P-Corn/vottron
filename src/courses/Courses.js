import React from 'react';
import {Container, Typography, Button, Grid, Icon} from '@material-ui/core'


function Courses() {
  return (
    <div className="pageBg">
      <div className="content-wrapper">
        <Container 
          maxWidth='md'
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
            color="primary">
              Add course
            </Button>
          </Grid>
          <hr></hr>
          
        </Container>
      </div>
    </div>
  );
}

export default Courses;