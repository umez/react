import React from 'react';
import { Link } from 'react-router-dom';
import GoogleAuth from './GoogleAuth';

const Header = () => {
    return (
        <header className="ui secondary pointing menu">
            <Link to="/" className="item">Streamer</Link> 
            <div className="right menu">
                <Link className="item" to="/">All Streams</Link>
                <GoogleAuth />
            </div>

        </header>
    )    
}

export default Header;