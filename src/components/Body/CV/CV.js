import React from 'react';
import classes from './CV.module.css';

const CV = () => {
    return (
        <div>
            <div className = {classes.LastName}>
                <h1>Alex</h1>
                <h1>Loian</h1>
            </div>
            <div>
                <h2>Front-End Developer</h2>
                <h3>Java Script, React, NodeJS, Bootstrap, CSS, HTML</h3>
            </div>
            <div className = {classes.TwoColumns}>
                <div>
                    <h2>Details</h2>
                    <p>Ukraine, Dnipro +38 098 050 6389 alex@loian.dev</p>
                    <h2>Education</h2>
                    <div className={classes.EducationItem}>
                        <h5>Sep.2018</h5>
                        <h4>Front-End JS Developer - IMT Academy</h4>
                    </div>
                    <div className={classes.EducationItem}>
                        <h5>May.2018</h5>
                        <h4>Advanced English - American English Center</h4>
                    </div>
                    <div className={classes.EducationItem}>
                        <h5>2013</h5>
                        <h4>National Metallurgical Academy of Ukraine</h4>
                        <p>Specialist degree of the Mechanical Engineering</p>
                    </div>
                    <div className={classes.EducationItem}>
                        <h5>2012</h5>
                        <h4>National Metallurgical Academy of Ukraine</h4>
                        <p>Bachelor degree of the Export Manager</p>
                    </div>
                </div>
                <div>
                    <h2>Experience</h2>
                    <div className={classes.ExperienceItem}>
                        <h5>Nov. 2018 - Present</h5>
                        <h4>Support Engineer - Caspio</h4>
                        <span>
                        I performed a remote troubleshooting through diagnostic techniques and pertinent questions Determined the best solution based on the issue and details provided by customers Walked the customer through the problem-solving process Directed unresolved issues to the next level of support staff
                        </span>
                    </div>
                    <div className={classes.ExperienceItem}>
                        <h5>Sep. 2018 - Present</h5>
                        <h4>WordPress/Front - End Developer - Freelancer</h4>
                        <span>
                        I am creating Sites with WordPress CMS.
                        </span>
                    </div>
                    <div className={classes.ExperienceItem}>
                        <h5>Jan. 2018 - Sep.2018</h5>
                        <h4>WordPress Developer – Gasbuild.com</h4>
                        <span>
                        Created and keep updated website gasbuild.com. Implemented a new design and customized plugins. Developed back-end and front end part.
                        </span>
                    </div>
                    <div className={classes.ExperienceItem}>
                        <h5>Oct. 2014 - Jan.2018</h5>
                        <h4>Natural Gas Engineer–Gasbuild</h4>
                        <span>
                        managing clients 
                        managing contracts.
                        increased revenue of my branch by 100%..
                        </span>
                    </div>
                    <h2>Skills</h2>
                        <p>English</p>
                        <p>JavaScript</p>
                        <p>React</p>
                        <p>CSS</p>
                        <p>HTML 5</p>
                        <p>NodeJS</p>
                </div>
                
            </div>
            <div>
                <button>
                    GitHUB
                </button>
                <button>
                    CV
                </button>
                <button>
                    LinkedIn
                </button>
            </div>
        </div>

    );
};

export default CV;