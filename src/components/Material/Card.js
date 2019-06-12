import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Grid from '@material-ui/core/Grid';





function ImgMediaCard(props) {
 
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Grid item xs={12} sm={6} md={6} lg={4} >
     <img src={props.picture} alt={props.alt}  width='100%'/>
     <ExpansionPanel expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <ExpansionPanelSummary
        aria-controls="panel1bh-content"
        id="panel1bh-header"
        >
          <Typography gutterBottom variant="h5" component="h2">{props.title}</Typography>
        </ExpansionPanelSummary >
        <ExpansionPanelDetails>
            <Typography>
                {props.body}
            </Typography>
          <div>
              <Button variant="contained" color="secondary" >Demo</Button>
          </div>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </Grid>
  );
}

export default ImgMediaCard;