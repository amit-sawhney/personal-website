import React from 'react';
import './Projects.scss';
import { Divider, Grid, Box, Button, Link as ExternalLink } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';
import studentsmeet from '../../assets/studentsmeet.png';
import planethunters from '../../assets/planethunters.png';
import personalwebsite from '../../assets/personalwebsite.png';
import dashboard from '../../assets/dashboard.png';
import statefarm from '../../assets/statefarm.jpg';

const Projects = (props) => {

    return (
        <div>
            <h1 className="projects-header">Featured Projects</h1>
            <Divider />
            <div className="grid">
                <div className="project">
                    <img src={studentsmeet} className="project-preview"></img>
                    <div className="overlay">
                        <div>
                            <h3 style={{ marginBottom: 0 }}>Students Meet</h3>
                        </div>
                        <div>
                            <p style={{ marginTop: 0 }}>Hackathon</p>
                        </div>
                        <div>
                            <RouterLink to="studentsmeet" className="view-link">
                                <Button className="view-button">View Info</Button>
                            </RouterLink>
                            <ExternalLink target="_blank" href="http://studentsmeet.herokuapp.com/" className="view-link">
                                <Button className="view-button">View App</Button>
                            </ExternalLink>
                        </div>
                    </div>
                </div>
                <div className="project">
                    <img src={planethunters} className="project-preview"></img>
                    <div className="overlay">
                        <div>
                            <h3 style={{ marginBottom: 0 }}>Planet Hunters</h3>
                        </div>
                        <div>
                            <p style={{ marginTop: 0 }}>Class ML/DL Project</p>
                        </div>
                        <div>
                            <RouterLink className="view-link">
                                <Button className="view-button">View Info</Button>
                            </RouterLink>
                        </div>
                    </div>
                </div>
                <div className="project">
                    <img src={personalwebsite} className="project-preview"></img>
                    <div className="overlay">
                        <div>
                            <h3 style={{ marginBottom: 0 }}>Personal Website</h3>
                        </div>
                        <div>
                            <p style={{ marginTop: 0 }}>Side Project</p>
                        </div>
                    </div>
                </div>
                <div className="project">
                    <img src={dashboard} className="project-preview"></img>
                    <div className="overlay">
                        <div>
                            <h3 style={{ marginBottom: 0 }}>3DP4ME Dashboard</h3>
                        </div>
                        <div>
                            <p style={{ marginTop: 0 }}>Hack4Impact Fall 2020</p>
                        </div>
                        <div>
                            <RouterLink className="view-link">
                                <Button className="view-button">View Info</Button>
                            </RouterLink>
                        </div>
                    </div>
                </div>
                <div className="project">
                    <img src={statefarm} className="project-preview"></img>
                    <div className="overlay">
                        <div>
                            <h3 style={{ marginBottom: 0 }}>Technical Recovery Plan</h3>
                        </div>
                        <div>
                            <p style={{ marginTop: 0 }}>State Farm Summer 2020</p>
                        </div>
                        <div>
                            <RouterLink className="view-link">
                                <Button className="view-button">View Info</Button>
                            </RouterLink>
                        </div>
                    </div>
                </div>
                <div className="project">
                    <img src={statefarm} className="project-preview"></img>
                    <div className="overlay">
                        <div>
                            <h3 style={{ marginBottom: 0 }}>DropOff/TDM Exception</h3>
                        </div>
                        <div>
                            <p style={{ marginTop: 0 }}>State Farm Summer 2019</p>
                        </div>
                        <div>
                            <RouterLink className="view-link">
                                <Button className="view-button">View Info</Button>
                            </RouterLink>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Projects;