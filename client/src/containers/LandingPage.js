import React, { Component } from 'react'
import { Route, NavLink } from 'react-router-dom';
import styles from './LandingPage.module.css';


import Layout from '../components/layout';
import TopNavigation from '../components/navigation/topNavigation';
import BlogDetailDisplay from '../components/blog/blogDetailDisplay';


export default class LandinPage extends Component {
    render() {
        let { match } = this.props;
        return (
            <Layout >
                <div className={styles.LandingPage}>

                    <TopNavigation logo={{ url: "https://placehold.it/80x40", alt: "Logo Image", background: "white" }}>
                        <ul>
                            <li><NavLink to="/" >Home</NavLink></li>
                            <li><NavLink to="/create" >Create</NavLink></li>
                            <li><NavLink to="/edit" >Edit</NavLink></li>
                            <li><NavLink to="/test" >Test</NavLink></li>
                        </ul>
                    </TopNavigation>

                    <BlogDetailDisplay
                        header={true}
                        tagLine="What an amazing article this week"
                    />


                </div>

            </Layout>

        )
    }
}
