import React from 'react'
import { NavLink } from 'react-router-dom';

const ProfileNavbar = (props) => {
    return (
        <nav>
            <ul>
                <li><NavLink to="/">Profile</NavLink></li>
                <li><NavLink to="/">Favorites</NavLink></li>
                <li><NavLink to="/">Dashboard</NavLink></li>
            </ul>
        </nav>
    )
}

export default ProfileNavbar