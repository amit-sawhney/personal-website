import React from 'react';
import avatar from '../../assets/avatar.png'
import './Home.scss'

const Home = (props) => {

    return (
        <div className="content-container">
            <div className="sidebar">
                <img width="128px" src={avatar} alt="My avatar" />
                <p>test</p>
            </div>
            <div className="content">
                <h2>content</h2>
            </div>
        </div>
    );
}

export default Home;