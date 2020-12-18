import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './Experience.scss';
import { Work as WorkIcon } from '@material-ui/icons';
import { Divider } from '@material-ui/core';
import experienceData from '../../Information/experience.json';

const Experience = (props) => {

    return (
        <div className="experience-section">
            <h1 className="experience-header">Work Experience</h1>
            <Divider />
            <div className="timeline-wrapper">
                <VerticalTimeline className="timeline">
                    {experienceData.map(experience => (
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: '#7510f7', color: '#fff' }}
                            contentArrowStyle={{ borderRight: '7px solid rgb(117,16,247)' }}
                            dateClassName="timeline-date"
                            iconStyle={{ background: '#86A00F', color: '#fff' }}
                            icon={<WorkIcon />}
                        >
                            <h2 className="timeline-position">{experience.position}</h2>
                            <h2 className="timeline-title">{experience.company}</h2>
                            <h4 className="timeline-subtitle">{experience.location}</h4>
                            <em>{experience.date}</em>
                            <p>{experience.description}</p>
                        </VerticalTimelineElement>
                    ))}
                </VerticalTimeline>
            </div>
        </div >
    )
}

export default Experience;