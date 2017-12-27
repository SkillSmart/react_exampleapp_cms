import React from 'react'
import styles from './blogList.module.css';

import BlogListItem from './blogListItem';

const BlogList = ({ blogs, onClick }) => {
    return (
        <div className={styles.BlogList}>
            <ul className={styles.List}>
                {blogs.map(blog => <BlogListItem 
                                    onClick={() => onClick(blog.title)}
                                    blog={blog} />)}
            </ul>
        </div>
    )
}

BlogList.defaultProps = {
    blogs: [
        {
            displayImg: 'https://placehold.it/250x150',
            title: 'The Title is missing',
            views: 123
        },{
            displayImg: 'https://placehold.it/250x150',
            title: 'The Title is missing',
            views: 123
        },{
            displayImg: 'https://placehold.it/250x150',
            title: 'The Title is missing',
            views: 123
        },{
            displayImg: 'https://placehold.it/250x150',
            title: 'The Title is missing',
            views: 123
        },{
            displayImg: 'https://placehold.it/250x150',
            title: 'The Title is missing',
            views: 123
        },
    ]
}

export default BlogList