import React from 'react';
import avatar from '../../assets/avatar.svg';
import github from '../../assets/github.svg';
import instagram from '../../assets/instagram.svg';
import linkedin from '../../assets/linkedin.svg';
import statefarm from '../../assets/statefarm.jpg';
import hack4impact from '../../assets/hack4impact.png';
import { Avatar, Drawer, Link, Toolbar } from '@material-ui/core';
import Experience from '../Experience/Experience';
import Projects from '../Projects/Projects';
import About from '../About/About';
import './Home.scss';
import useWindowSize from '../../hooks/useWindowSize';

const Home = (props) => {

    const size = useWindowSize();

    console.log(size.width);

    return (
        <div className="content-container">
            {size.width <= 1200 ? (
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
                    <p>{`Computer Science + Mathematics`}</p>
                    <p>{`@ UIUC May '24`}</p>
                    <p>{`James Scholar`}</p>
                    <p>{`GPA: 4.0 / 4.0`}</p>
                </div>
            ) : (
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
                                    <Link target="_blank" href="https://github.com/amit-sawhney">
                                        <Avatar className="social-avatar" src={github} />
                                    </Link>
                                    <Link rel="noopener" target="_blank" href="https://www.linkedin.com/in/amit-m-sawhney/">
                                        <Avatar variant="square" className="social-avatar" src={linkedin} />
                                    </Link>
                                    <Link rel="noopener" target="_blank" href="https://www.instagram.com/amit__02/">
                                        <Avatar variant="square" className="social-avatar" src={instagram} />
                                    </Link>
                                </div>
                                <div className="about-section">
                                    <b>Major</b>
                                    <p>{`Computer Science + Mathematics`}</p>
                                    <b>School</b>
                                    <p>{`University of Illinois @ Urbana-Champaign`}</p>
                                    <b>Graduation</b>
                                    <p>May 2024</p>
                                    <b>Academic Accolade</b>
                                    <p>{`James Scholar`}</p>
                                    <b>Current GPA</b>
                                    <p>{`GPA: 4.0 / 4.0`}</p>
                                </div>
                            </div>
                        </div>
                    </Drawer>

                )}

            <div className="content">
                <About />
                <Experience />
                <Projects />
            </div>
        </div>
    );
}

export default Home;