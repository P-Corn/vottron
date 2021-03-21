import React from 'react';
import {Card, ContainerCard, CardActionArea, CardContent, CardMedia, Typography} from '@material-ui/core';
import { Link , withRouter} from 'react-router-dom';
import Students from '../students/Students'


function CourseCard({courseId, courseTitle, courseDesc, courseImg, history}) {
  return (
    <Card>
        <CardActionArea>
            <CardMedia
                component="img"
                height="200"
                image={courseImg}
                title="Contemplative Reptile"
                onClick={() => history.push(`/courses/${courseId}`)}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                {courseTitle}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                {courseDesc}
                </Typography>
            </CardContent>
        </CardActionArea>
    </Card>
  );
}

export default withRouter(CourseCard);