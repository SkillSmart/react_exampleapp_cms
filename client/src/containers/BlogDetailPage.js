import React, { Component } from 'react'
import { Route, NavLink } from 'react-router-dom';
import styles from './BlogDetailPage.module.css';


import Layout from '../components/layout';
import BlogTopNavigation from '../components/navigation/blogTopNavigation';

import BlogDetail from '../components/blog/blogDetail';
import BlogHeader from '../components/blog/blogHeader';
import BlogList from '../components/blog/blogList';
import CommentList from '../components/commenting/CommentList';


export default class BlogDetailPage extends Component {

    handleBlogSelection = (blogtitle) => {
        // Currently we just want to navigate to the
        // detail view url of the selected post
        this.props.history.push('/')
        // TODO: Change the BlogDetailPage to display 
        // the blog based on thr title slug in the header
        // and redirect to the new url
    }

    render() {
        let { match, blog } = this.props;
        return (
            <Layout >
                <div className={styles.LandingPage}>

                    <BlogTopNavigation />

                    <BlogHeader
                        headerImg={blog.headerImg}
                        headerImgAlt={blog.headerImgAlt}
                    />

                    <div className={styles.body}>
                        <div className={styles.aside}>

                            <BlogList
                                noItems={10}
                                onClick={this.handleBlogSelection}
                            />

                        </div>
                        <div className={styles.main}>
                            <BlogDetail blog={blog} />

                            <CommentList />
                        </div>
                    </div>
                </div>
            </Layout>
        )
    }
}

BlogDetailPage.defaultProps = {
    header: true,

    blog: {
        title: 'Title is yet missing',
        subheader: 'Subheader is missing',
        body: 'Body of the Blog is missing',
        headerImg: 'https://placehold.it/1250x350',
        headerImgAlt: 'Alternative Description',
    },
    onSelect: () => true
}
