import React from 'react';
import classes from './Expirience.module.css';
import LabelArea from '../../LabelArea/LabelArea';
import ExpItem from './ExpItem/ExpItem';

import Caspio from '../../../assets/images/alex-loian-work-timeline-caspio.png';
import AmericanEnglishCenter from '../../../assets/images/alex-loian-work-timeline-english-level.png';
import IMT from '../../../assets/images/alex-loian-work-timeline-imt-school.png';
import Upwork from '../../../assets/images/alex-loian-work-timeline-upwork.png';

import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';



const Expirience = () => {
    return (
        <div className={classes.Container}>
            <LabelArea name = 'Expirience Timeline'/>
            <div className={classes.Items}>
            <VerticalTimeline>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="oct./2018 - present"
                    iconStyle={{ background: 'black', color: '#fff' }}
                    icon={null}
                >
                    <ExpItem picture ={Caspio} alt ='Caspio Help Desk Specialist'/>
                    <h3 className="vertical-timeline-element-title">Art Director</h3>
                    <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
                    <p>
                    Creative Direction, User Experience, Visual Design, SEO, Online Marketing
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="sep./2018 - present"
                    iconStyle={{ background: 'black', color: '#fff' }}
                    icon={null}
                >
                    <ExpItem picture ={Upwork} alt='Upwork Freelancer Wordpress Developer'/>
                    <h3 className="vertical-timeline-element-title">Creative Director</h3>
                    <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
                    <p>
                    Creative Direction, User Experience, Visual Design, Project Management, Team Leading
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
                    date="may/2017 - dec./2018"
                    iconStyle={{ background: 'black', color: '#fff' }}
                    icon={null}
                >
                    <ExpItem picture ={AmericanEnglishCenter} alt = 'American English Center Bussiness English'/>
                    <h3 className="vertical-timeline-element-title">American English Center</h3>
                    <h4 className="vertical-timeline-element-subtitle">Dnipro</h4>
                    <p>
                    Advanced Level
                    </p>
                </VerticalTimelineElement>
            </VerticalTimeline>




            </div>

        </div>
    );
};

export default Expirience;




