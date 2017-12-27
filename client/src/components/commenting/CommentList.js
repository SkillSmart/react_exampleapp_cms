import React, { Component } from 'react'
import styles from './CommentList.module.css';

import CommentListItem from './commentListItem';

class CommentList extends Component {
    render() {
        let { comments } = this.props;
        return (
            <ul className={styles.CommentList}>
                {comments.map(comment => {
                    return <CommentListItem  {...comment} />
                })}
            </ul>
        )
    }
}



CommentList.defaultProps = {
    comments: [
        {
            user: {
                name: 'Frank',
                email: 'test@usertest.com',
                location: 'Germany',
                profileImg: 'https://placehold.it/80x80'
            },
            createdAt: '12.08.2017 : 23:12:54',
            title: 'My first comment',
            body: 'My first comment body'
        },
        {
            user: {
                name: 'Frank',
                email: 'test@usertest.com',
                location: 'Germany',
                profileImg: 'https://placehold.it/80x80'

            },
            createdAt: '12.08.2017 : 23:12:54',
            title: 'My second comment',
            body: 'My first comment body'
        },
        {
            user: {
                name: 'Frank',
                email: 'test@usertest.com',
                location: 'Germany',
                profileImg: 'https://placehold.it/80x80'

            },
            createdAt: '12.08.2017 : 23:12:54',
            title: 'My third comment',
            body: 'My first comment body'
        },
        {
            user: {
                name: 'Frank',
                email: 'test@usertest.com',
                location: 'Germany',
                profileImg: 'https://placehold.it/80x80'

            },
            createdAt: '12.08.2017 : 23:12:54',
            title: 'My fourth comment',
            body: 'My first comment body'
        },
    ]
}

export default CommentList;
