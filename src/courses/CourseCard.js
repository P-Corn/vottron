import React from 'react';
import {Card, ContainerCard, CardActionArea, CardContent, CardMedia, Typography} from '@material-ui/core';
import { Link } from 'react-router-dom';


function CourseCard({courseTitle, courseDesc, courseImg, history}) {
  return (
    <Card>
        <CardActionArea>
            <Link to='/students'>
            <CardMedia
                component="img"
                height="200"
                image={courseImg}
                title="Contemplative Reptile"
            />
            </Link>
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

export default CourseCard;