import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    top:'0px',
    backgroundColor: '#ffcc00',
  },
}));

function LinkTab(props) {
  return (
    <Tab
      style={{backgroundColor:'black  '}}
      component="a"
      onClick={event => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

function ExpSwitch(props){
  if (props.type==='All'){
    return(<VerticalTimeline style={{margin:'0px'}}>
          {
              props.data.map((element)=>{
                  return (<VerticalTimelineElement
                          key={element.key+13}
                          className="vertical-timeline-element--work"
                          date={element.date}
                          iconStyle={{ background: '#3f51b5', color: '#fff' }}
                          icon={null}>
                          <img src ={element.img} width="80px" alt ={element.title}/>
                          <h4 className="vertical-timeline-element-title">{element.title}</h4>
                          <h4 className="vertical-timeline-element-subtitle">{element.subtitle}</h4>
                          <p>{element.body}</p>
                          <div>
                             <ul>{element.lists ? element.lists.map((list,index)=>(<li key={index} style={{textAlign:'left'}}>{list} </li>)): null}</ul>
                             {element.skills ? element.skills.map((skill,index)=>(<span key={index}>{skill} </span>)): null}
                          </div>
                      </VerticalTimelineElement>);
              })
          }
      </VerticalTimeline>);
  }
  if (props.type==='Work'){
    return(<VerticalTimeline>
          {
              props.data.map((element)=>{
                 if(element.type==='work'){
                    return (
                      <VerticalTimelineElement
                          key={element.key+'11'}
                          className="vertical-timeline-element--work"
                          date={element.date}
                          iconStyle={{ background: '#3f51b5', color: '#fff' }}
                          icon={null}>
                          <img src ={element.img} width="80px" alt ={element.title}/>
                          <h4 className="vertical-timeline-element-title">{element.title}</h4>
                          <h4 className="vertical-timeline-element-subtitle">{element.subtitle}</h4>
                          <p>{element.body}
                          </p>
                      </VerticalTimelineElement>
                    );
                 }
                 return null;
              })
          }
      </VerticalTimeline>);
  }
  if (props.type==='Study'){
    return(
      <VerticalTimeline style={{margin:'0px'}}>
          {
              props.data.map((element)=>{
                    if(element.type==='study'){
                      return (<VerticalTimelineElement
                            key={element.key+12}
                            className="vertical-timeline-element--work"
                            date={element.date}
                            iconStyle={{ background: '#3f51b5', color: '#fff' }}
                            icon={null}>
                            <img src ={element.img} width="80px" alt ={element.title}/>
                            <h4 className="vertical-timeline-element-title">{element.title}</h4>
                            <h4 className="vertical-timeline-element-subtitle">{element.subtitle}</h4>
                            <p>{element.body}
                            </p>
                        </VerticalTimelineElement>);
                  }
                  return null;
              })
          }
      </VerticalTimeline>);
  }
}

export default function Expirience(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  return (<div className={classes.root}>
      <h1 style={{PaddingTop:'50px', marginBottom:'30px'}}>Experience</h1>
      <AppBar position="static">
        <Tabs variant="fullWidth" value={value} onChange={handleChange}>
          <LinkTab label="All"/>
          <LinkTab label="Work"/>
          <LinkTab label="Study"/>
        </Tabs>
      </AppBar>
    {value === 0 && <ExpSwitch type='All' data={props.data}/>}
    {value === 1 && <ExpSwitch type='Work' data={props.data}/>}
    {value === 2 && <ExpSwitch type='Study' data={props.data}/>}
    </div>);
}


