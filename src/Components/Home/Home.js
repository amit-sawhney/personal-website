import React from 'react';
import avatar from '../../assets/avatar.svg';
import github from '../../assets/github.svg';
import instagram from '../../assets/instagram.svg';
import linkedin from '../../assets/linkedin.svg';
import { Avatar, Link } from '@material-ui/core';
import './Home.scss';

const Home = (props) => {

    return (
        <div className="content-container">
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
                <p></p>
            </div>
            <div className="content">
                <div className="content-section">
                    <text id="header">Experience</text>
                    <div className="experience-item">
                        <text id="company"></text>
                        <text id="title"></text>
                    </div>
                </div>
                <div className="content-section">
                        <text id="header">Projects</text>
                    </div>
                </div>
            </div>
    );
}

export default Home;