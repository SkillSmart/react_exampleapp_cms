import React from 'react'
import styles from './blogDetailDisplay.module.css';
import Aux from 'react-aux'

import BlogDetail from './blogDetail';
import BlogList from './blogList';
import CommentList from '../commenting/CommentList';



const BlogDetailDisplay = ({
    header, headerImg, headerImgAlt, tagLine, blog }) => {
    return (
        <div className={styles.BlogDetailsDisplay}>
            {header &&
                <Aux>
                    <div className={styles.blogHeader} >
                        <h1 className={styles.tagLine}>{tagLine}</h1>
                        <img className={styles.headerImg} src={headerImg} alt={headerImgAlt} />
                    </div>
                </Aux>
            }
            <div className={styles.body}>
                <div className={styles.aside}>
                    The Sidebar
                    <BlogList 
                    />

                </div>
                <div className={styles.main}>
                    <BlogDetail blog={blog} />

                    <CommentList />
                </div>
            </div>
        </div>
    )
}

BlogDetailDisplay.defaultProps = {
    header: true,
    headerImg: 'https://placehold.it/1250x350',
    headerImgAlt: 'Alternative Description',
    blog: {
        title: 'Title is yet missing',
        subheader: 'Subheader is missing',
        body: 'Body of the Blog is missing'
    }
}

export default BlogDetailDisplay