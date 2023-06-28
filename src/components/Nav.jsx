import React from 'react';
import logo from "../images/logo.png"

export const Nav = (props) => {
    return (
        <div>
            <div className='nav'>
                <div className='logo'><img width={150} src={logo}/></div>
                <div className='nav-link'>
                    <span>Home</span>
                    <span>About Us</span>
                    <span>Clients</span>
                    <span>Contact</span>
                </div>
            </div>
        </div>
    )
}