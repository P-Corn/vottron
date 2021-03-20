import React from 'react';
import {Container, Typography, Button, Grid} from '@material-ui/core';


function Courses() {

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
        </Container>
      </div>
    </div>
  );
}

export default Courses;