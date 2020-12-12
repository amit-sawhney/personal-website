import React from 'react';
import avatar from '../../assets/avatar.svg'
import { Avatar } from '@material-ui/core'
import './Home.scss'

const Home = (props) => {

    return (
        <div className="content-container">
            <div className="sidebar">
                <Avatar className="avatar" src={avatar} />
                <p>test</p>
            </div>
            <div className="content">
                <h2>content</h2>
            </div>
        </div>
    );
}

export default Home;