import React from 'react'
import Aux from 'react-aux';

import Footer from './footer';

const Layout = ({ children }) => {
    return (
        <Aux>
            <div className="container">
                {children}
            </div>
            <Footer
                title="A good Footer is worth it"
            />
        </Aux>
    )
}

export default Layout