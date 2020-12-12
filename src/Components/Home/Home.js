import React from 'react';
import avatar from '../../assets/avatar.svg';
import github from '../../assets/github.svg';
import instagram from '../../assets/instagram.svg';
import linkedin from '../../assets/linkedin.svg';
import statefarm from '../../assets/statefarm.jpg';
import hack4impact from '../../assets/hack4impact.png';
import { Avatar, Drawer, Link, Toolbar } from '@material-ui/core';
import './Home.scss';

const Home = (props) => {

    return (
        <div className="content-container">
            <Drawer
                className="drawer"
                variant="permanent"
                classes={{
                    paper: "drawerPaper",
                }}
            >
                <Toolbar />
                <div className="drawerContainer">
                    <div className="sidebar">
                        <Avatar className="avatar" src={avatar} />
                        <div className="socials">
                            <Link rel="noopener" target="_blank" href="https://github.com/amit-sawhney">
                                <Avatar className="social-avatar" src={github} />
                            </Link>
                            <Link rel="noopener" target="_blank" href="https://www.linkedin.com/in/amit-m-sawhney/">
                                <Avatar variant="square" className="social-avatar" src={linkedin} />
                            </Link>
                            <Link rel="noopener" target="_blank" href="https://www.instagram.com/amit__02/">
                                <Avatar variant="square" className="social-avatar" src={instagram} />
                            </Link>
                        </div>
                        <p>{`Computer Science + Math @ UIUC May '24`}</p>
                        <p>{`James Scholar`}</p>
                        <p>{`GPA: 4.0 / 4.0`}</p>
                    </div>
                </div>
            </Drawer>

            <div className="content">
                <div className="content-section">
                    <text id="header">Experience</text>
                    <div className="experience-item">
                        <div className="title">
                            <img width="50px" src={statefarm} alt="State Farm logo" />
                            <p id="company"> State Farm | Research Development Center Intern (Spring 2021)</p>
                        </div>
                    </div>
                    <div className="experience-item">
                        <div className="title">
                            <img width="50px" src={hack4impact} alt="State Farm logo" />
                            <p id="company"> Hack4Impact | Software Developer (Fall 2020 - Present)</p>
                        </div>
                    </div>
                    <div className="experience-item">
                        <div className="title">
                            <img width="50px" src={statefarm} alt="State Farm logo" />
                            <p id="company"> State Farm | Enterprise Technology Management Services Intern (Summer 2020)</p>
                        </div>
                    </div>
                    <div className="experience-item">
                        <div className="title">
                            <img width="50px" src={statefarm} alt="State Farm logo" />
                            <p id="company"> State Farm | Enterprise Technology Test Data Management Intern (Summer 2019)</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;