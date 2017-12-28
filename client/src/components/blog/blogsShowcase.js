import React, { Component } from 'react'

import styles from './blogsShowcase.module.css';
import Spinner from '../ui/loading';
import BlogTile from '../blog/blogTile';

export default class BlogsShowcase extends Component {


  render() {
    let {blogs} = this.props;
    // Check if the Showcase has received items
    if(!blogs) return <div>Loading Blogs....</div>

    return (
      <div className={styles.BlogShowcase}>
        {blogs.map( blog => <BlogTile key={blog.title} blog={blog}/>)}
      </div>
    )
  }
}

