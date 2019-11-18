import React from 'react';
import './FeedPost.css';

class FeedPost extends React.Component {
    postInfo = {
        title: "Sample Post Title",
        imageLink: "https://www.stockvault.net/data/2007/03/01/100169/preview16.jpg",
        description: "This is the description of the post"
    }
    render() {
        return (
            <div className='FeedPost'>
                <p>{this.postInfo.title}</p>                
                <img src ={this.postInfo.imageLink} alt='post' width='200' height='200'></img>
                <p>{this.postInfo.description}</p>
            </div>
        )        
    }
}

export default FeedPost;
