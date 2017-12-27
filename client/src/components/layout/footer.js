import React from 'react'

import styles from './footer.module.css';

const Footer = ({ title }) => {
    return (
        <div className={styles.Footer}>
            <div className="container">
                <div className={styles.ContentWrapper}>
                    <div className={styles.LeftFooter}>
                        The Left Footer
                    </div>
                    <div className={styles.RightFooter}>
                        The Right Footer
                    </div>
                </div>
                <div className={styles.Disclaimer}>
                    This will be the disclaimer
                </div>
            </div>
        </div>
    )
}

Footer.defaultProps = {
    title: 'Enter a title'
}

export default Footer