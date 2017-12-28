import React from 'react'
import {NavLink} from 'react-router-dom';

import TopNavigation from './topNavigation';

const BlogTopNavigation = () => {
    return (
        <TopNavigation logo={{ url: "https://placehold.it/80x40", alt: "Logo Image", background: "white" }}>
            <ul>
                <li><NavLink to="/" >Home</NavLink></li>
                <li><NavLink to="/blog" >Blog</NavLink></li>
                <li><NavLink to="/edit" >Edit</NavLink></li>
                <li><NavLink to="/test" >Test</NavLink></li>
            </ul>
        </TopNavigation>
    )
}

export default BlogTopNavigation