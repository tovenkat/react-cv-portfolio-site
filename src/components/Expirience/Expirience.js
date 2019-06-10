import React from 'react';
import classes from './Expirience.module.css';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';


//Pictures
import Caspio from '../../assets/images/alex-loian-work-timeline-caspio.png';
import AmericanEnglishCenter from '../../assets/images/alex-loian-work-timeline-english-level.png';
import IMT from '../../assets/images/alex-loian-work-timeline-imt-school.png';
import Upwork from '../../assets/images/alex-loian-work-timeline-upwork.png';
import Gas from '../../assets/images/alex-loian-work-timeline-gas-engineer.png';
import University from '../../assets/images/alex-loian-work-timeline-university.png';
import ERC from '../../assets/images/alex-loian-work-timeline-erc.png';
import Microsoft from '../../assets/images/alex-loian-work-timeline-microsoft.png';
////

const DataObj={
    '1':{
        'img':Caspio,
        'title':'Help Desk Specialist',
        'subtitle':'Caspio inc.',
        'date':'oct./2018 - present',
        'body':'Working on support Line with United States Market. Product support and general JavaScript and HTML Customizations.I performed a remote troubleshooting through diagnostic techniques and pertinent questions Determined the best solution based on the issue and details provided by customers Walked the customer through the problem-solving process Directed unresolved issues to the next level of support staff.'
    },
    '2':{
        'img':Upwork,
        'title':'Freelancer',
        'subtitle':'Upwork',
        'date':'sep./2018 - present',
        'body':'Wordpress Developer, general customizations.'
    },
    '3':{
        'img': IMT,
        'title':'IMT School',
        'subtitle':'Front-End Developer',
        'date':'july./2018 - oct./ 2018',
        'body':'Vanilla JavaScript, NodeJS, JQuerry, CSS, HTML, Git, MySQL.'
    },
    '4':{
        'img': Gas,
        'title':'Wordpress Developer',
        'subtitle':'GasBuild',
        'date':'feb/2018 - may./2018',
        'body':'Created and keep updated website gasbuild.com. Implemented a new design and customized plugins. Developed back-end and front end part.'
    },
    '5':{
        'img': Gas,
        'title':'Natural Gas Safety Engineer',
        'subtitle':'GasBuild',
        'date':'sep/2015 - feb./2018',
        'body':'Managing clients managing contracts. increased revenue of my branch by 100%'
    },
    '6':{
        'img': AmericanEnglishCenter,
        'title':'American English Center Dnipro',
        'subtitle':'Advanced Level.',
        'date':'may/2017 - dec./2018',
        'body':''
    },
    '7':{
        'img': Microsoft,
        'title':'Sales Consultant',
        'subtitle':'Mircosoft Ukraine',
        'date':'dec/2012 - may./2015',
        'body':''
    },
    '8':{
        'img': ERC,
        'title':'Sales Consultant',
        'subtitle':'Apple Ukraine (ERC)',
        'date':'feb/2011 - dec./2012',
        'body':''
    },
    '9':{
        'img': University,
        'title':'American English Center Dnipro',
        'subtitle':'National Metallurgical Academy of Ukraine',
        'date':'sep./2008 - jul./2013',
        'body':''
    },
    '10':{
        'img': University,
        'title':'WED Manager',
        'subtitle':'National Metallurgical Academy of Ukraine',
        'date':'sep./2010 - jan./2013',
        'body':''
    },

}

const ELEMENTS = Object.entries(DataObj).map((element)=>{
    return (
        <VerticalTimelineElement
            key={element[0]}
            className="vertical-timeline-element--work"
            date={element[1].date}
            iconStyle={{ background: 'black', color: '#fff' }}
            icon={null}>
            <img className = {classes.Img} src ={element[1].img} alt ={element[1].title}/>
            <h4 className="vertical-timeline-element-title">{element[1].title}</h4>
            <h4 className="vertical-timeline-element-subtitle">{element[1].subtitle}</h4>
            <p>{element[1].body}
            </p>
        </VerticalTimelineElement>
    );
});


const Expirience = () => {
    return (
        <div className={classes.Container}>
            <VerticalTimeline>
                {ELEMENTS}
            </VerticalTimeline>
        </div>
    );
};

export default Expirience;




