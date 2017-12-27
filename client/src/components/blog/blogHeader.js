import React from 'react'

import styles from './blogHeader.module.css';

const BlogHeader = ({ tagLine, headerImg, headerImgAlt }) => {
    return (
        <div className={styles.blogHeader} >
            <h1 className={styles.tagLine}>{tagLine}</h1>
            <img className={styles.headerImg} src={headerImg} alt={headerImgAlt} />
        </div>
    )
}

BlogHeader.defaultProps = {
    tagLine: 'Tagline has to be set',
    headerImg: 'https://placehold.it/80x80',
    headerImgAlt: 'An alternative label has to be set yet'
}

export default BlogHeader