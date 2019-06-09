import React from 'react';
import Paper from '../Material/Paper';
import SkillItem from './SkillItem/SkillItem';
import classes from './Skills.module.css';

import ReactLogo from '../../assets/images/alex-loian-skills-react-logo.svg';
import NodeJS from '../../assets/images/alex-loian-skills-NodeJS-logo.png';
import JSLogo from '../../assets/images/alex-loian-skills-JS-logo.png';
import English from '../../assets/images/alex-loian-skill-english-level.png';
import html from '../../assets/images/alex-loian-skill-html5.png';
import cssLogo from '../../assets/images/alex.loian.skill-css.png';

const Skills = (props) => {
    return (
            <div  className={classes.Skills}>
                <SkillItem picture={English} alt='English' title='English'/>
                <SkillItem picture={ReactLogo} alt='Alex Loian Front-End Developer React Native' title='React'/>
                <SkillItem picture={JSLogo} alt='Alex Loian Front-End Developer Vanilla JavaScript' title='JavaScript'/>
                <SkillItem picture={cssLogo} alt='English' title='CSS'/>
                <SkillItem picture={html} alt='English' title='HTML 5'/>
                <SkillItem picture={NodeJS} alt='English' title='NodeJS'/>
            </div>
    );
};

export default Skills;