import React from 'react'

import styles from './blogListItem.module.css';

const BlogListItem = ({ blog }) => {
    let { displayImg, title, views } = blog
    return (
        <li className={styles.BlogListItem}>
            <img src={displayImg} alt={title} />
            <div className={styles.ItemDetails}>
                <span>{title}</span><span>{views}</span>
            </div>
        </li>
    )
}

BlogListItem.defaultProps = {
    blog: {
        displayImg: 'https://placehold.it/250x150',
        title: 'The Title is missing',
        views: 123
    }
}

export default BlogListItem