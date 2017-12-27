import React, { Component } from 'react'
import { Route, NavLink } from 'react-router-dom';
import styles from './BlogOverviewPage.module.css';


import Layout from '../components/layout';
import BlogTopNavigation from '../components/navigation/blogTopNavigation';




export default class BlogDetailPage extends Component {

    handleBlogSelection = (blogtitle) => {
        console.log(`${blogtitle} was selected`);
    }

    render() {
        let { match, blog } = this.props;
        return (
            <Layout >
                <div className={styles.LandingPage}>

                    <BlogTopNavigation />

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
