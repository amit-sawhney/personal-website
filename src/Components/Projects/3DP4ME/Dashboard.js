import React, { useEffect } from 'react';
import './Dashboard.scss';

const Dashboard = (props) => {

    useEffect(() => {
        window.scrollTo(0,0);
    }, [])

    return (
        <div className="project-info-content">
            <div className="section">
                <h1 className="header">What is 3DP4ME?</h1>
                <div className="section-content">
                    3DP4ME is a nonprofit dedicated to providing affordable hearing aids to low-income citizens of Jordan by desiging and developing
                    unique 3D printed hearing aids. As a nonprofit, they strive to provide more opportunities to individuals who suffer from
                    medical issues but cannot receive the adquate help.
                </div>
            </div>
            <div className="section">
                <h1 className="header">Problem</h1>
                <div className="section-content">
                    Currently, 3DP4ME is relying on well organized emails and communication to design and develop these hearing aids. With
                    several volunteers handling differents parts of the hearing aid life cycle, keeping tack of each patient's unique situations
                    and designs quickly became a complex process. The inefficiencies of this development process led to a slow production and
                    output process.
                </div>
            </div>
            <div className="section">
                <h1 className="header">Solution</h1>
                <div className="section-content">
                    To help mitigate the inefficient design, development, and communication process, Hack4Impact developed a Dashboard that
                    will be used by the volunteers and engineerings to store patient information, track, and manage the development flow of a patient.
                    The Dashboard contains a main dashboard page that would display a button group of the main steps a patient followed: Medical
                    Info, Ear Scanning, CAD Modeling, 3D Printing, Post Processing, Delivery, and Feedback. The table allows volunteers and
                    engineers to view and search the current status of each patient and their progress among each of the decoupled steps.
                    <br />
                    The second part of the solution entailed a unique patient page. This page pagent page contains the same development steps
                    aforementioend and allows volunteers and engineers to view necessary patient information wihtin each phase and to manage
                    the status of a patient.
                </div>
            </div>
            <div className="section">
                <h1 className="header">Preview</h1>
                <div className="section-content">

                </div>
            </div>
            <div className="section">
                <h1 className="header">Tech Stack</h1>
                <div className="section-content">
                    <div>React JS</div>
                    <div>Express</div>
                    <div>MongoDB</div>
                    <div>AWS</div>
                </div>
            </div>
            <div className="section">
                <h1 className="header">Features</h1>
                <div className="section-content">

                </div>
            </div>
            <div className="section">
                <h1 className="header">What I learned?</h1>
                <div className="section-content">
                    <h2>Arabic and English Support</h2>
                    This was the first project I worked on as a part of Hack4Impact. While at this point in my web development career,
                    I had some experience working on complex web apps, this was the first time for many of the features I implemented.
                    Prior to this application, I had never considered the complexity of supporting a RTL and LTR-based website. Understanding 
                    the process of mirroring and individual CSS adapation based on the which langauge was being supported took a fair amount of
                    trial and error.
                    <h2>Product Designers and Tech Leads</h2>
                    While it seems silly, this was my first experience working with an explicit Designer and Tech Lead. Prior to this project,
                    my team of developers was responsible for the design and development of the entire application. Having access to a specific
                    individual specializing in technical support and product design helped me gain insight into the lifecycle of product

                </div>
            </div>
        </div>
    )
}

export default Dashboard;