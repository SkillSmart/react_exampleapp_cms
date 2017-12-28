import React from 'react'
import styles from './section.module.css'

const Section = ({ img, imgAlt, header, subheader, children, type }) => {
    switch (type) {
        case "left":
            return (
                <div className={styles.LeftAligned}>
                    <div className="container">
                        <div className={styles.Header}>
                            <img className={styles.SectionImg} src={img} alt={imgAlt} />
                            <h2 className={styles.SectionHeader}>{header}</h2>
                            <p>{subheader}</p>
                        </div>
                        <div className={styles.Body}>
                            {children}
                        </div>
                    </div>
                </div>
            )
        case "right":
            return (
                <div className={styles.RightAligned}>
                    <div className="container">
                        <div className={styles.Header}>
                            <img className={styles.SectionImg} src={img} alt={imgAlt} />
                            <h2 className={styles.SectionHeader}>{header}</h2>
                            <p>{subheader}</p>
                        </div>
                        <div className={styles.Body}>
                            {children}
                        </div>
                    </div>
                </div>
            )
        default:
            return (
                <div className={styles.LeftAligned}>
                    {children}
                </div>
            )
    }
}

export default Section