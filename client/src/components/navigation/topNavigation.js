import React from 'react'
import styles from './topNavigation.module.css';


import ProfileNavbar from './profileNavbar';

const TopNavigation = ({ logo, children }) => {
    return (
        <div className={styles.navWrapper}>
            {logo && <img src={logo.url} className={styles.navLogo} alt={logo.alt} />}
            <nav className={styles.navBar}>
                {children}
            </nav>
            <ProfileNavbar />
        </div>
    )
}

export default TopNavigation