import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './Experience.scss';
import { Work as WorkIcon } from '@material-ui/icons';
import { Divider } from '@material-ui/core';

const Experience = (props) => {

    return (
        <div className="experience-section">
            <h1 className="experience-header">Work Experience</h1>
            <Divider />
            <div className="timeline-wrapper">
                <VerticalTimeline className="timeline">
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#7510f7', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid rgb(117,16,247)' }}
                        dateClassName="timeline-date"
                        iconStyle={{ background: '#86A00F', color: '#fff' }}
                        icon={<WorkIcon />}
                    >
                        <h2 className="timeline-position">ET Software Developer Intern</h2>
                        <h2 className="timeline-title">State Farm</h2>
                        <h4 className="timeline-subtitle">Bloomington, IL</h4>
                        <em>Summer 2021</em>
                        <p>Looking to the future...</p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#7510f7', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid rgb(117,16,247)' }}
                        dateClassName="timeline-date"
                        iconStyle={{ background: '#86A00F', color: '#fff' }}
                        icon={<WorkIcon />}
                    >
                        <h2 className="timeline-position">Software Developer</h2>
                        <h2 className="timeline-title">Hack4Impact</h2>
                        <h4 className="timeline-subtitle">Urbana, IL</h4>
                        <em>Spring 2021</em>
                        <p className = "timeline-description">Looking to the future...</p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#7510f7', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid rgb(117,16,247)' }}
                        dateClassName="timeline-date"
                        iconStyle={{ background: '#86A00F', color: '#fff' }}
                        icon={<WorkIcon />}
                    >
                        <h2 className="timeline-position">Research Dev. Center Intern</h2>
                        <h2 className="timeline-title">State Farm</h2>
                        <h4 className="timeline-subtitle">Urbana, IL</h4>
                        <em>Spring 2021</em>
                        <p className = "timeline-description">Looking to the future...</p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#7510f7', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid rgb(117,16,247)' }}
                        dateClassName="timeline-date"
                        iconStyle={{ background: '#86A00F', color: '#fff' }}
                        icon={<WorkIcon />}
                    >
                        <h2 className="timeline-position">Software Developer</h2>
                        <h2 className="timeline-title">Hack4Impact</h2>
                        <h4 className="timeline-subtitle">Urbana, IL</h4>
                        <em>Fall 2020</em>
                        <p className = "timeline-description">Developed a dashboard that allows the 3DP4ME nonprofit increase the design and distribution of 3D printed hearing
                        aids to low income citizens of Jordan</p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#7510f7', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid rgb(117,16,247)' }}
                        dateClassName="timeline-date"
                        iconStyle={{ background: '#86A00F', color: '#fff' }}
                        icon={<WorkIcon />}
                    >
                        <h2 className="timeline-position">ET Management Services Intern</h2>
                        <h2 className="timeline-title">State Farm</h2>
                        <h4 className="timeline-subtitle">Bloomington, IL</h4>
                        <em>Summer 2020</em>
                        <p className = "timeline-description">Developed a Technical Recovery Plan application that supported application backups</p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#7510f7', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid rgb(117,16,247)' }}
                        dateClassName="timeline-date"
                        iconStyle={{ background: '#86A00F', color: '#fff' }}
                        icon={<WorkIcon />}
                    >
                        <h2 className="timeline-position">ET Test Data Management Intern</h2>
                        <h2 className="timeline-title">State Farm</h2>
                        <h4 className="timeline-subtitle">Bloomington, IL</h4>
                        <em>Summer 2019</em>
                        <p className = "timeline-description">Developed Dropoff, an application that tracks and manages form approval through company management</p>
                    </VerticalTimelineElement>


                </VerticalTimeline>
            </div>
        </div >
    )
}

export default Experience;