import React from 'react'

import styles from './footer.module.css';

const Footer = ({title}) => {
    return (
        <div>
            <div className={styles.LeftFooter}>
                The Left Footer
            </div>

            <div className={styles.RightFooter}>
                The Right Footer
            </div>
        </div>
    )
}

Footer.defaultProps = {
    title: 'Enter a title'
}

export default Footer