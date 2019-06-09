import React from 'react';
import classes from './Expirience.module.css';
import LabelArea from '../../LabelArea/LabelArea';
import ExpItem from './ExpItem/ExpItem';

import Caspio from '../../../assets/images/alex-loian-work-timeline-caspio.png';
import AmericanEnglishCenter from '../../../assets/images/alex-loian-work-timeline-english-level.png';
import IMT from '../../../assets/images/alex-loian-work-timeline-imt-school.png';
import Upwork from '../../../assets/images/alex-loian-work-timeline-upwork.png';
import Gas from '../../../assets/images/alex-loian-work-timeline-gas-engineer.png';
import University from '../../../assets/images/alex-loian-work-timeline-university.png';
import ERC from '../../../assets/images/alex-loian-work-timeline-erc.png';
import Microsoft from '../../../assets/images/alex-loian-work-timeline-microsoft.png';


import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';


const Expirience = () => {

    return (
        <div className={classes.Container}>
            <LabelArea name = 'Experience Timeline'/>
            <div className={classes.Items}>
            <VerticalTimeline>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="oct./2018 - present"
                    iconStyle={{ background: 'black', color: '#fff' }}
                    icon={null}
                >
                    <ExpItem picture ={Caspio} alt ='Caspio Help Desk Specialist'/>
                    <h3 className="vertical-timeline-element-title">Help Desk Specialist</h3>
                    <h4 className="vertical-timeline-element-subtitle">Caspio inc.</h4>
                    <p>
                    Working on support Line with United States Market. Product support and general JavaScript and HTML Customizations.
                    I performed a remote troubleshooting through diagnostic techniques and pertinent questions Determined the best solution based on the issue and details provided by customers Walked the customer through the problem-solving process Directed unresolved issues to the next level of support staff.
                
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="sep./2018 - present"
                    iconStyle={{ background: 'black', color: '#fff' }}
                    icon={null}
                >
                    <ExpItem picture ={Upwork} alt='Upwork Freelancer Wordpress Developer'/>
                    <h3 className="vertical-timeline-element-title">Freelancer</h3>
                    <h4 className="vertical-timeline-element-subtitle">UpWork</h4>
                    <p>
                    Wordpress Developer, general customizations.
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="july./2018 - oct./ 2018"
                    iconStyle={{ background: 'black', color: '#fff' }}
                    icon={null}
                >
                    <ExpItem picture ={IMT} alt = 'Front-End Java Script Developer React Node JS'/>
                    <h3 className="vertical-timeline-element-title">IMT School</h3>
                    <h4 className="vertical-timeline-element-subtitle">Front-End Developer</h4>
                    <p>
                    Vanilla JavaScript, NodeJS, JQuerry, CSS, HTML, Git, MySQL.
                    </p>
                </VerticalTimelineElement>
                
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="feb/2018 - may./2018"
                    iconStyle={{ background: 'black', color: '#fff' }}
                    icon={null}
                >
                    <ExpItem picture ={Gas} alt = 'Gasbuild Wordpress Developer'/>
                    <h3 className="vertical-timeline-element-title">Wordpress Developer</h3>
                    <h4 className="vertical-timeline-element-subtitle">GasBuild</h4>
                    <p>
                    Created and keep updated website gasbuild.com. Implemented a new design and customized plugins. Developed back-end and front end part.
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="sep/2015 - feb./2018"
                    iconStyle={{ background: 'black', color: '#fff' }}
                    icon={null}
                >
                    <ExpItem picture ={Gas} alt = 'Gasbuild Natural Gas Safety Engineer'/>
                    <h3 className="vertical-timeline-element-title">Natural Gas Safety Engineer</h3>
                    <h4 className="vertical-timeline-element-subtitle">GasBuild</h4>
                    <p>
                    Managing clients managing contracts. increased revenue of my branch by 100%
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="may/2017 - dec./2018"
                    iconStyle={{ background: 'black', color: '#fff' }}
                    icon={null}
                >
                    <ExpItem picture ={AmericanEnglishCenter} alt = 'American English Center Bussiness English'/>
                    <h3 className="vertical-timeline-element-title">American English Center</h3>
                    <h4 className="vertical-timeline-element-subtitle">Dnipro</h4>
                    <p>
                    Advanced Level.
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="dec/2012 - may./2015"
                    iconStyle={{ background: 'black', color: '#fff' }}
                    icon={null}
                >
                    <ExpItem picture ={Microsoft} alt = 'Microsoft Ukraine'/>
                    <h3 className="vertical-timeline-element-title">Sales Consultant</h3>
                    <h4 className="vertical-timeline-element-subtitle">Mircosoft Ukraine</h4>
                    <p>
                    Advanced Level.
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="feb/2011 - dec./2012"
                    iconStyle={{ background: 'black', color: '#fff' }}
                    icon={null}
                >
                    <ExpItem picture ={ERC} alt = 'ERC Sales Consultant'/>
                    <h3 className="vertical-timeline-element-title">Sales Consultant</h3>
                    <h4 className="vertical-timeline-element-subtitle">Apple Ukraine (ERC)</h4>
                    <p>
                    Advanced Level.
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="sep./2008 - jul./2013"
                    iconStyle={{ background: 'black', color: '#fff' }}
                    icon={null}
                >
                    <ExpItem picture ={University} alt = 'National Metallurgical Academy of Ukraine'/>
                    <h3 className="vertical-timeline-element-title">Mechanical Engineer Specialist</h3>
                    <h4 className="vertical-timeline-element-subtitle">National Metallurgical Academy of Ukraine</h4>
                    <p>
                    Advanced Level.
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="sep./2010 - jan./2013"
                    iconStyle={{ background: 'black', color: '#fff' }}
                    icon={null}
                >
                    <ExpItem picture ={University} alt = 'National Metallurgical Academy of Ukraine'/>
                    <h3 className="vertical-timeline-element-title">WED Manager </h3>
                    <h4 className="vertical-timeline-element-subtitle">National Metallurgical Academy of Ukraine</h4>
                    <p>
                    Advanced Level.
                    </p>
                </VerticalTimelineElement>
            </VerticalTimeline>




            </div>

        </div>
    );
};

export default Expirience;




