import React from 'react';
import './Students.css'
import AddIcon from '@material-ui/icons/Add';
import {Container, Typography, Button, Grid, Icon} from '@material-ui/core'
import StudentsTable from './StudentsTable';


function Students() {
  return (
    <div className="pageBg">
      <div className="content-wrapper">
        <Container 
          maxWidth='md'
        >
          {/* <Grid 
            container 
            justify="space-between"
            alignItems="center"
          >
            <Grid item>
              <Typography variant="h3">Students</Typography>
            </Grid>
            <Grid item>
              <Button
                color="primary"
                variant="contained"
                endIcon={<AddIcon/>}
              >
                Add Student
              </Button>
            </Grid>
          </Grid> */}
          <StudentsTable />
        </Container>
      </div>
    </div>
  );
}

export default Students;