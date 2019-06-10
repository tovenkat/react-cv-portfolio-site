import React from 'react';
import SkillItem from './SkillItem/SkillItem';
import classes from './Skills.module.css';

import ReactLogo from '../../assets/images/alex-loian-skills-react-logo.svg';
import NodeJS from '../../assets/images/alex-loian-skills-NodeJS-logo.png';
import JSLogo from '../../assets/images/alex-loian-skills-JS-logo.png';
import English from '../../assets/images/alex-loian-skill-english-level.png';
import html from '../../assets/images/alex-loian-skill-html5.png';
import cssLogo from '../../assets/images/alex.loian.skill-css.png';

const DATASKILLSOBJ = [{
    picture:English,
    alt:'English',
    title:'English',
    key:1,
},
{
    picture:ReactLogo,
    alt:'React Native JSX',
    title:'Alex Loian Front-End Developer React Native',
    key:2,
},
{
    picture:JSLogo,
    alt:'JavaScript Development',
    title:'Alex Loian Front-End Developer Vanilla JavaScript',
    key:3,
},
{
    picture:cssLogo,
    alt:'CSS 5',
    title:'CSS',
    key:4,
},
{
    picture:html,
    alt:'HTML 5 Development',
    title:'HTML 5',
    key:5,
},
{
    picture:NodeJS,
    alt:'NodeJS Development',
    title:'NodeJS',
    key:6,
}];

const Skills = () => {
    return (
            <div  className={classes.Skills}>
                {
                    DATASKILLSOBJ.map((item)=>{
                    return (<SkillItem picture={item.picture} alt={item.alt} title={item.title} key={item.key}/>);
                })}
            </div>
    );
};

export default Skills;