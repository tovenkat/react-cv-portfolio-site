import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
  card: {
    maxWidth: '220px',
    
    margin: '10px',
  },
});

function SkillItem(props) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
            <CardMedia
              component="img"
              alt={props.alt}
              height="240"
              image={props.picture}
              title={props.title}
            />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.text}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default SkillItem;