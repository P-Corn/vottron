import {React, useState} from 'react';
import {TextField, Grid, Paper, Typography, Button} from '@material-ui/core';
import Axios from 'axios';


function AddStudentForm({handleClose}) {

    const dateObj = new Date();

    const createId = () => {
        return 7;
    }

    const [studentId, setStudentId] = useState(createId);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [adminNotes, setAdminNotes] = useState("");
    const [course, setCourse] = useState("");
    const [dob, setDob] = useState("");
    const [enrollDate] = useState("2021/01/01");

    const addStudent = () => {
        Axios.post('http://localhost:3001/students', {
            studentId,
            firstName,
            lastName,
            adminNotes,
            course,
            dob,
            enrollDate
        }).then(() => console.log("added student"))
    }

    const handleSubmit = (e) => {
        handleClose();
        addStudent();
        // e.preventDefault();
    }

  return (
    <Paper className="form-container">
        <form 
            className="add-student-form"
            onSubmit={handleSubmit}
        >
            <Typography
                variant="h4"
                className="form-row"
            >
                Add a new student
            </Typography>
            <Grid 
             container
             justify="space-between"
             spacing={4}
             className="form-row"
            >
                <Grid xs={12} sm={6} item>
                    <TextField 
                     fullWidth={true} 
                     id="First name" 
                     label="First name" 
                     variant="filled"
                     value={firstName}
                     onChange={(e) => setFirstName(e.target.value)}
                    />
                </Grid>
                <Grid xs={12} sm={6} item>
                    <TextField 
                     fullWidth={true} 
                     id="Last name" 
                     label="Last name"
                     variant="filled"
                     value={lastName}
                     onChange={(e) => setLastName(e.target.value)}
                     />
                </Grid>
            </Grid>
            <Grid 
             container
             spacing={4}
             className="form-row"
            >
                <Grid xs={12} item>
                    <TextField
                        variant="filled"
                        multiline
                        rows={4}
                        fullWidth={true} 
                        id="Notes" 
                        label="Notes"
                        value={adminNotes}
                        onChange={(e) => setAdminNotes(e.target.value)}
                    />
                </Grid>
            </Grid>
            <Grid 
             container
             justify="space-between"
             spacing={4}
             className="form-row form-row__last"
            >
                <Grid xs={12} sm={6} item>
                    <TextField 
                     fullWidth={true} 
                     id="Course" 
                     label="Course" 
                     variant="filled"
                     value={course}
                     onChange={(e) => setCourse(e.target.value)}
                    />
                </Grid>
                <Grid xs={12} sm={6} item>
                    <TextField 
                     fullWidth={true} 
                     id="date of birth" 
                     label="Date of birth"
                     variant="filled"
                     value={dob}
                     onChange={(e) => setDob(e.target.value)}
                     />
                </Grid>
            </Grid>
            <Grid 
                container
                justify="flex-end"
            >
                <Grid item>
                    <Button
                        variant="contained"
                        color="primary"
                        className="submit-btn"
                        type="submit"
                        value="submit"
                    >
                        Submit
                    </Button>
                </Grid>
            </Grid>
        </form>
    </Paper>
  );
}

export default AddStudentForm;