import React, {useState} from 'react';
import {Grid, Typography, Divider, Box, Button, IconButton} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ActivityEdit from './ActivityEdit';
import {ArrowBack} from '@material-ui/icons/';
import Delete from '@material-ui/icons/Delete';
import Axios from 'axios';

function Activity({clickedActivity, getActivities, setSingleActivity}) {

    const [editActivity, setEditActivity] = useState(false)
    const [currentActivity, setCurrentActivity] = useState(clickedActivity)

    const deleteActivity = () => {
        const activityId = currentActivity.activityid;
        Axios.post('https://vottron.herokuapp.com/activities/delete', {
            activityId,
        }).then(() => {
            getActivities(currentActivity.courseid)
            setSingleActivity(false)
            Axios.post('https://vottron.herokuapp.com/studentactivities/delete', {
                activityId,
            }).then(() => {
                getActivities(currentActivity.courseid)
                setSingleActivity(false)
            })
        })
    }

    return (
        <div>
            {editActivity === true ? 
            <ActivityEdit
            currentActivity={currentActivity}
            getActivities={getActivities}
            setEditActivity={setEditActivity}
            setCurrentActivity={setCurrentActivity}
            />
            :
            <>
            <Grid
            container
            justify="space-between"
            >
                <Grid item xs={6} container alignItems="center">
                    <Grid item>
                        <IconButton
                            color="primary"
                            onClick={() => setSingleActivity(false)}
                        >
                            <ArrowBack/>
                        </IconButton>
                    </Grid>

                    <Grid
                    item
                    >
                        <Typography 
                        className="dashboard-card-title" 
                        variant="h5"
                        color="primary"
                        >
                            Activity
                        </Typography>
                    </Grid>
                </Grid>
                <Grid
                item
                
                >
                    <IconButton
                    color="secondary"
                    variant="outlined"
                    onClick={() => deleteActivity()}
                    >
                        <Delete/>
                    </IconButton>
                    <Box px={1} component="span"/>
                    <Button
                    color="primary"
                    variant="outlined"
                    onClick={() => setEditActivity(true)}
                    >
                        Edit
                    </Button>
                </Grid>
            </Grid>
            <Box pb={1}/>
            <Box>
                <Grid
                container
                direction="column"
                >
                    <Grid item>
                        <Typography color="primary" variant="subtitle1">
                            Title
                        </Typography>
                        <Typography gutterBottom variant="h5">
                            {currentActivity.activitytitle}
                        </Typography>
                    </Grid>
                    <Box pt={2} pb={3}>
                        <Divider/>
                    </Box>
                    <Grid item>
                        <Typography color="primary" variant="subtitle1">
                            Instructions
                        </Typography>
                        <Typography variant="h6">
                            {currentActivity.activitydescription}
                        </Typography>
                    </Grid>
                    <Box pt={2} pb={3}>
                        <Divider/>
                    </Box>
                    <Grid item>
                        <Typography color="primary" variant="subtitle1">
                            Solution
                        </Typography>
                        <Typography variant="h6">
                            {currentActivity.activitysolution}
                        </Typography>
                    </Grid>
                </Grid>
            </Box>
            </>
            }
        </div>
    );
}

export default Activity;