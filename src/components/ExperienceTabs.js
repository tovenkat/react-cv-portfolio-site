import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
//Pictures
import Caspio from '../assets/images/alex-loian-work-timeline-caspio.png';
import AmericanEnglishCenter from '../assets/images/alex-loian-work-timeline-english-level.png';
import IMT from '../assets/images/alex-loian-work-timeline-imt-school.png';
import Upwork from '../assets/images/alex-loian-work-timeline-upwork.png';
import Gas from '../assets/images/alex-loian-work-timeline-gas-engineer.png';
import University from '../assets/images/alex-loian-work-timeline-university.png';
import ERC from '../assets/images/alex-loian-work-timeline-erc.png';
import Microsoft from '../assets/images/alex-loian-work-timeline-microsoft.png';
////


const DataObj=[
  {
      img:Caspio,
      key:1,
      type:'work',
      title:'Help Desk Specialist',
      subtitle:'Caspio inc.',
      date:'oct./2018 - present',
      body:'Working on support Line with United States Market. Product support and general JavaScript and HTML Customizations.I performed a remote troubleshooting through diagnostic techniques and pertinent questions Determined the best solution based on the issue and details provided by customers Walked the customer through the problem-solving process Directed unresolved issues to the next level of support staff.'
  },
  {
      img:Upwork,
      key:2,
      type:'work',
      title:'Freelancer',
      subtitle:'Upwork',
      date:'sep./2018 - present',
      body:'Wordpress Developer, general customizations.'
  },
  {
      img: IMT,
      key:3,
      type:'study',
      title:'IMT School',
      subtitle:'Front-End Developer',
      date:'july./2018 - oct./ 2018',
      body:'Vanilla JavaScript, NodeJS, JQuerry, CSS, HTML, Git, MySQL.'
  },
  {
      img: Gas,
      key:4,
      type:'work',
      title:'Wordpress Developer',
      subtitle:'GasBuild',
      date:'feb/2018 - may./2018',
      body:'Created and keep updated website gasbuild.com. Implemented a new design and customized plugins. Developed back-end and front end part.'
  },
  {
      img: Gas,
      key:5,
      type:'work',
      title:'Natural Gas Safety Engineer',
      subtitle:'GasBuild',
      date:'sep/2015 - feb./2018',
      body:'Managing clients managing contracts. increased revenue of my branch by 100%'
  },
  {
      img: AmericanEnglishCenter,
      key:6,
      type:'study',
      title:'American English Center Dnipro',
      subtitle:'Advanced Level.',
      date:'may/2017 - dec./2018',
      body:''
  },
  {
      img: Microsoft,
      key:7,
      type:'work',
      title:'Sales Consultant',
      subtitle:'Mircosoft Ukraine',
      date:'dec/2012 - may./2015',
      body:''
  },
  {
      img: ERC,
      key:8,
      type:'work',
      title:'Sales Consultant',
      subtitle:'Apple Ukraine (ERC)',
      date:'feb/2011 - dec./2012',
      body:''
  },
  {
      img: University,
      key:9,
      type:'study',
      title:'American English Center Dnipro',
      subtitle:'National Metallurgical Academy of Ukraine',
      date:'sep./2008 - jul./2013',
      body:''
  },
  {
      img: University,
      key:10,
      type:'study',
      title:'WED Manager',
      subtitle:'National Metallurgical Academy of Ukraine',
      date:'sep./2010 - jan./2013',
      body:''
  }

];




function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={event => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 4,
    backgroundColor: theme.palette.background.paper,
  },
}));

function ExpSwitch(props){
  if (props.type==='All'){
    return(
      <VerticalTimeline style={{margin:'0px'}}>
          {
              DataObj.map((element)=>{
                  return (
                    
                      <VerticalTimelineElement
                          key={element.key+13}
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
              })
          }
      </VerticalTimeline>
    )
  }
  if (props.type==='Work'){
    return(
      <VerticalTimeline>
          {
              DataObj.map((element)=>{
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
                 } else{
                   return null;
                 } 
              })
          }
      </VerticalTimeline>
    )
  }
  if (props.type==='Study'){
    return(
      <VerticalTimeline style={{margin:'0px'}}>
          {
              DataObj.map((element)=>{
                    if(element.type==='study'){
                      return (
                        
                        <VerticalTimelineElement
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
                        </VerticalTimelineElement>
                       
                      );
                  } else{
                    return null;
                  }
              })
          }
      </VerticalTimeline>

    )
  }
}

function SwitchedExpirience(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  return (
    <div className={classes.root}>
    <AppBar position="static">
      <h2>Experience</h2>
      <Tabs variant="fullWidth" value={value} onChange={handleChange}>
        <LinkTab label="All"/>
        <LinkTab label="Work"/>
        <LinkTab label="Study"/>

      </Tabs>
    </AppBar>
    {value === 0 && <ExpSwitch type='All'/>}
    {value === 1 && <ExpSwitch type='Work'/>}
    {value === 2 && <ExpSwitch type='Study'/>}


  </div>
  );
}

export default SwitchedExpirience;
