'use strict';
import React from 'react';
import s from './Post.module.css';

const Post = () => {
    return (
        <div className={s.item}>
            <h4>post 1</h4>
            <img src='https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-contact-512.png' />
            <div>
                <span>like</span>
            </div>
        </div>
    )
}
export default Post;