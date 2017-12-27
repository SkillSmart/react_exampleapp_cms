import React from 'react'

import styles from './blogDetail';

const BlogDetail = ({ blog }) => {
    return (
        <div>
            <h2 className={styles.blogHeader}>{blog.title}</h2>
            <p>{blog.subheader}</p>
            <hr />
            <p>{blog.body}</p>
        </div>
    )
}

export default BlogDetail