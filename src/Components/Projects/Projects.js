import React from 'react';
import './Projects.scss';
import { Divider, Grid, Box } from '@material-ui/core';
import studentsmeet from '../../assets/studentsmeet.png';
import planethunters from '../../assets/planethunters.png';

const Projects = (props) => {

    return (
        <div>
            <h1 className="projects-header">Featured Projects</h1>
            <Divider />
            <div className="grid">
                <div className="project">
                    <img src={studentsmeet} className="project-preview"></img>
                </div>
                <div className="project">
                    <img src={planethunters} className="project-preview"></img>
                </div>
                <div className="project">
                    
                </div>
                <div className="project">
                    
                </div>
                <div className="project">
                    
                </div>

            </div>
        </div>
    )
}

export default Projects;