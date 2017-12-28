import React, { Component } from 'react'
import { Route, NavLink } from 'react-router-dom';
import styles from './BlogOverviewPage.module.css';


import Layout from '../components/layout';
import BlogTopNavigation from '../components/navigation/blogTopNavigation';
import BlogSearchHeader from '../components/search/BlogSearchHeader';
import BlogsShowcase from '../components/blog/blogsShowcase';




export default class BlogDetailPage extends Component {

    handleBlogSelection = (blogtitle) => {
        console.log(`${blogtitle} was selected`);
    }

    render() {
        let { match, blogs } = this.props;
        return (
            <Layout >
                <div className={styles.LandingPage}>

                    <BlogTopNavigation />
                    <BlogSearchHeader />
                    <BlogsShowcase 
                        blogs={blogs}
                    />  

                </div>
            </Layout>
        )
    }
}

BlogDetailPage.defaultProps = {
    header: true,

    blogs: [
        {
            title: 'First Blog yet missing',
            subheader: 'Subheader is missing',
            body: 'Body of the Blog is missing',
            headerImg: 'https://placehold.it/1250x350',
            headerImgAlt: 'Alternative Description',
        },
        {
            title: 'Second is yet missing',
            subheader: 'Subheader is missing',
            body: 'Body of the Blog is missing',
            headerImg: 'https://placehold.it/1250x350',
            headerImgAlt: 'Alternative Description',
        },
        {
            title: 'Third is yet missing',
            subheader: 'Subheader is missing',
            body: 'Body of the Blog is missing',
            headerImg: 'https://placehold.it/1250x350',
            headerImgAlt: 'Alternative Description',
        },
        {
            title: 'First Blog yet missing',
            subheader: 'Subheader is missing',
            body: 'Body of the Blog is missing',
            headerImg: 'https://placehold.it/1250x350',
            headerImgAlt: 'Alternative Description',
        },
        {
            title: 'Second is yet missing',
            subheader: 'Subheader is missing',
            body: 'Body of the Blog is missing',
            headerImg: 'https://placehold.it/1250x350',
            headerImgAlt: 'Alternative Description',
        },
        {
            title: 'Third is yet missing',
            subheader: 'Subheader is missing',
            body: 'Body of the Blog is missing',
            headerImg: 'https://placehold.it/1250x350',
            headerImgAlt: 'Alternative Description',
        },
        {
            title: 'First Blog yet missing',
            subheader: 'Subheader is missing',
            body: 'Body of the Blog is missing',
            headerImg: 'https://placehold.it/1250x350',
            headerImgAlt: 'Alternative Description',
        },
        {
            title: 'Second is yet missing',
            subheader: 'Subheader is missing',
            body: 'Body of the Blog is missing',
            headerImg: 'https://placehold.it/1250x350',
            headerImgAlt: 'Alternative Description',
        },
        {
            title: 'Third is yet missing',
            subheader: 'Subheader is missing',
            body: 'Body of the Blog is missing',
            headerImg: 'https://placehold.it/1250x350',
            headerImgAlt: 'Alternative Description',
        },
    ],
    onSelect: () => true
}
