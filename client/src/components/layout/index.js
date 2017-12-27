import React from 'react'

import Footer from './footer';

const Layout = ({ children }) => {
    return (
        <div className="container">
            {children}
            <Footer 
                title="A good Footer is worth it"
            />
        </div>
    )
}

export default Layout