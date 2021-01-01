import React, { useEffect } from 'react';
import './Dashboard.scss';
import jsontranslatorscript from '../../../assets/jsontranslatorscript.png';

const Dashboard = (props) => {

    useEffect(() => {
        window.scrollTo(0, 0);
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
                    <h3>Sortable Table</h3>
                    Having been web-development for a few years now, I, like any other developed, have created tables of all shapes and sizes.
                    Implementing the design for a single step was simple and even making it searchable was no trouble. The complexity came from
                    3 main categories:
                    <ol>
                        <li>Generalization of the component to handle every step uniquely and all patients</li>
                        <li>Avoiding searching delays on the dynamic search for large patient counts</li>
                        <li>Using React Hooks to toggle-sort specific columns of the table between up-sort, down-sort, and no-sort</li>
                    </ol>
                    <h3>Arabic support</h3>
                    Suprsingly, the CSS behind the RTL support was less complicated than I imagined. By utilizing the <code>dir</code> attribute
                    of a <code>{"<body>"}</code>, a jss-rtl dependency for Material-UI and a key prop passed between every component
                    I was easily able to manage an effective website mirroring. <br />
                    The more complicated portion of this was translating the text on the screen. The team agreed that storing two translations
                    of the website (in English and Arabic) within a JSON file would be the most effective solution. This narrowed the problem to
                    two main issues:
                    <ol>
                        <li>Toggling the actual translation</li>
                        <li>Strucutring the JSON language file</li>
                    </ol>
                    My solution utilized the key prop passed between all of the components and a duplicate JSON structure.
                    Essentially the key stores a value of either <code>AR</code> or <code>EN</code> and JSON file's first layer contains
                    two keys: <code>AR</code> or <code>EN</code>. By utilizing the structure of <code>JSON_OBJECT[PROPS_KEY].key1.key2...</code>
                    when the state of the PROPS_KEY was changed, all of the references to the corresponding language in the JSON also changed.

                    Nevertheless, a fullfledged website contains many portions of text and soon the JSON file became extensively burdensome
                    to update by hand. In turn, I developed a short Python Script that traverses any JSON object and uses a Google API to
                    translate each value of the original language file AND copy these translations into a new JSON object that had the same
                    key-value structure.<br />

                    <img className="json-script" alt="JSON Translator Script" src={jsontranslatorscript} />

                    <br />
                    While this script was not necessary, I am particullary proud of my use of recursion to create a script that,
                    to my knowledge, does not exist on the internet. Particularly, the use of recursion allows me to maintain any JSON structure

                    <h3>Complex States</h3>
                    One of the hardest components of this project was not the code behind the project but rather how the code should be structured
                    to prevent over-complications. As I move past this project, I wish I had, had a better understanding of PropTypes in React
                    components. Many Components called other components who each individually needed access to information about the state of (a)
                    patient(s). At the beginning of the project, I settled on a Controller component that essentially acts as the control base of
                    many of the states for an individual patient. Due to the individual patient resting on the top of its on DOM structure
                    (React Router put it at a unique url), there was no parental heircharchy; the Controller componenet handeled this.
                    <h3>Patient Information Saving/Disgarding</h3>
                    The last notable feature was the ability to disgard patient information being updated. Essentially, the goal was to give a
                    user updating patient information an opportunity to disgard their work if they wanted to restart or accidentally removed 
                    information. The complexity behind this issue lied in figuring out what information to revert to. I tackeled this by figuring
                    out how to create an object that had the same information as the state variable but was dismantalled from the state itself. 
                </div>
            </div>
            <div className="section">
                <h1 className="header">What I learned?</h1>
                <div className="section-content">
                    <h3>Arabic and English Support</h3>
                    This was the first project I worked on as a part of Hack4Impact. While at this point in my web development career,
                    I had some experience working on complex web apps, this was the first time for many of the features I implemented.
                    Prior to this application, I had never considered the complexity of supporting a RTL and LTR-based website. Understanding
                    the process of mirroring and individual CSS adapation based on the which langauge was being supported took a fair amount of
                    trial and error.
                    <h3>Product Designers and Tech Leads</h3>
                    While it seems silly, this was my first experience working with an explicit Designer and Tech Lead. Prior to this project,
                    my team of developers was responsible for the design and development of the entire application. Having access to a specific
                    individual specializing in technical support and product design helped me gain insight into the lifecycle of product.
                    <h3>CSS/SCSS</h3>
                    Prior to this project, I relied heavily on CSS frameworks. At my first internship, my team utilized Bootstrap CSS.
                    At my second, we utilized Material-UI. From then, I have used Material UI in almost every React project I have built.
                    Having a Product Designer is amazing, but sometimes their vision doesn't exactly coincide nicely with Material-UI
                    (to be fair its better). Regardless, this project opened me up to the power of my own styling and the power of styling
                    in general.
                </div>
            </div>
        </div>
    )
}

export default Dashboard;