import React from 'react';
import FeedPost from './FeedPost.js';
import './Feed.css'

class Feed extends React.Component {
    render() {
        return (
            <div className='Feed'>
                <h2>Feed</h2>
                <FeedPost />
                <FeedPost />
            </div>
        )
    }
}

export default Feed;