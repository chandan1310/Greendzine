import React from 'react'
import './Footer.scss';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (

        <footer className="footer">
            <div className="footer-content">
                <div className="home">
                    
                    <NavLink to="/">
                        <div className="home-logo"></div>
                    </NavLink>
                </div>
                <div className="user">

                <NavLink to="/userdata">
                    <div className="user-logo"></div>
                </NavLink> 
                </div>
            </div>
        </footer>
    )
}

export default Footer