import React from 'react'

import styles from './blogTile.module.css';

const BlogTile = ({ blog: { title, headerImg, headerImgAlt, body } }) => {
    return (
        <div className={styles.BlogTile}>
            <div>
                <img className={styles.HeaderImg} src={headerImg ? headerImg : 'https://placehold.it/200x150'} alt={headerImgAlt} />
                <h4 className={styles.BlogTitle}>{title}</h4>
            </div>
            <div className={styles.Body}>
                <p>{body}</p>
            </div>
        </div>
    )
}

export default BlogTile