import React from 'react'

import styles from './commentListItem.module.css';

const CommentListItem = ({ user, title, body, createdAt }) => {
    // Destructure the User Object for clarity here
    let { profileImg, name, email, location } = user;
    return (
        <div className={styles.ItemWrapper}>
            <div className={styles.UserDisplay}>
                {profileImg && 
                    <img src={ profileImg } alt={`Profile Image preview for ${name}`}/>
                }
                <span>{name}</span><span>{location}</span>
           </div>
           <div className={styles.Comment}>
                <span>{createdAt}</span>
                <h3>{title}</h3>
                <p>{body}</p>
           </div>
        </div>
            )
}

export default CommentListItem