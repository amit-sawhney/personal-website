import React from 'react';
import './Projects.scss';
import { Divider, Grid, Box, Button, Link as ExternalLink } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';
import studentsmeet from '../../assets/studentsmeet.png';
import planethunters from '../../assets/planethunters.png';
import personalwebsite from '../../assets/personalwebsite.png';
import dashboard from '../../assets/dashboard.png';
import statefarm from '../../assets/statefarm.jpg';
import useWindowSize from '../../hooks/useWindowSize';
import projects from '../../Information/projects.json';

const Projects = (props) => {

    const size = useWindowSize();

    const images = {
        "dashboard": dashboard,
        "statefarm": statefarm,
        "studentsmeet": studentsmeet,
        "planethunters": planethunters,
        "personalwebsite": personalwebsite
    }

    return (
        <div>
            <h1 className="projects-header">Featured Projects</h1>
            <Divider />
            <div className="grid">

                {projects.map(project => (
                    <div className="project">
                        <img src={images[project.img]} className="project-preview"></img>
                        <div>
                            <div className="overlay">
                                <div>
                                    <h3 style={{ marginBottom: 0 }}>{project.title}</h3>
                                </div>
                                <div>
                                    <p style={{ marginTop: 0 }}>{project.subtitle}</p>
                                </div>
                                <div className="project-btn-group">
                                    {project.viewInfo ? (
                                        <RouterLink to={project.to} className="view-link">
                                            <Button className="view-button">View Info</Button>
                                        </RouterLink>
                                    ) : (<></>)}
                                    {project.viewApp ? (
                                        <ExternalLink target="_blank" href={project.url} className="view-link">
                                            <Button className="view-button">View App</Button>
                                        </ExternalLink>
                                    ) : (<></>)}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Projects;