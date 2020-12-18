import React from 'react';
import { Divider } from '@material-ui/core';
import './About.scss';

const About = (props) => {

    return (
        <div className="about-section">
            <h1 className="about-header">About</h1>
            <Divider />
            <div className="about-content">
                Hello! My name is Amit. I am a freshman at UIUC majoring in Computer Science and Mathematics.
                I am a passionate Software Developer looking to consistently take what I learn in and/or out of the classroom to the real world
                in a way that can improve the lives of others. While a majority of my skillset lies within Web Development, I am hopeful to dive
                into the countless complexities of CS from Data Science to Visualization to AI/ML/DL.
            </div>
        </div>
    )
}

export default About;