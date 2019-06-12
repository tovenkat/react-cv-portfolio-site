import React from 'react';
import SkillItem from './SkillItem/SkillItem';
import classes from './Skills.module.css';
import Grid from '@material-ui/core/Grid';

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
    alt:'Alex Loian Front-End Developer React Native',
    title:'React',
    key:2,
},
{
    picture:JSLogo,
    alt:'Alex Loian Front-End Developer Vanilla JavaScript',
    title:'JavaScript',
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
                <Grid container spacing={3} style={{marginTop:'40px'}}alignContent='center' justify='center'>
                    {DATASKILLSOBJ.map((item)=>{
                        return (<Grid item xs={12} sm={6} md={3} lg={2} key={item.key}><SkillItem  picture={item.picture} alt={item.alt} title={item.title}/></Grid>);
                    })}
                </Grid>
    );
};

export default Skills;