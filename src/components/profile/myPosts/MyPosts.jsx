import React from "react"
import classes from "./myPosts.module.css"
import Post from "./post/post";




const MyPosts = (props) => {

    let postElements = props.posts.map(post => <Post key={post.id} src={post.src} post={post.post} count={post.count} />)

    const addPost = () => {
        props.addPost();
    }

    const onPostChange = (e) => {
        let postMessage = e.target.value;
        props.onPostChange(postMessage);
    }

    return (
        <div className={classes.postsContainer}>
            <h6>My posts</h6>
            <div className={classes.newsContainer}>
                <textarea name="" onChange={onPostChange} value={props.newPostText} placeholder="Print posts..." />
                <div className={classes.submitContainer}><div className={classes.submit} onClick={addPost}>Send</div></div>
            </div>
            <div className={classes.newPosts}>
                {postElements}
            </div>
        </div>
    )
}

export default MyPosts;