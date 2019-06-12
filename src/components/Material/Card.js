import React from 'react';


import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';






function ImgMediaCard(props) {
 
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
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
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}

export default ImgMediaCard;