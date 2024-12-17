import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Card, CardContent, CardMedia, Typography}
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import unicornbikeImg from './../assets/images/unicornbikeImg.jpg';
   

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 900,
    margin: 'auto',
    marginTop: theme.spacing(5),
  },
  title: {
    padding: theme.spacing(3, 2.5, 2),
    color: theme.palette.openTitle,
  },
  media: {
    minHeight: 400,
  },
}));

export default React.memo(function Home(){ 
const classes = useStyles()
return (
<Card className={classes.card}>
   
  <Typography variant="h6" className={classes.title}>Home Page</Typography>
<CardMedia className={classes.media}
component="img"
image={unicornbikeImg} title="Unicorn Bicycle" alt="Unicorn Bicycle"
loading="lazy"  // Lazy load the image
/>
<CardContent>
<Typography variant="body2" component="p"> 
Welcome to the MERN Skeleton home page.
<p>E-commerce Application</p>
</Typography> 
</CardContent>
</Card> 
);
});


