import React from "react"
import classes from "./myPosts.module.css"
import Post from "./post/post";

const MyPosts = (props) => {



    let postElements = props.posts.map(post => <Post key={post.id} src={post.src} post={post.post} count={post.count} />)

    let newPostElement = React.createRef();


    const addPost = () => {
        let text = newPostElement.current.value;
        alert(text);
    }


    return (
        <div className={classes.postsContainer}>
            <h6>My posts</h6>
            <div className={classes.newsContainer}>
                <textarea name="" ref={newPostElement} placeholder="Your news..."></textarea>
                <div className={classes.submitContainer}><div className={classes.submit} onClick={addPost}>Send</div></div>
            </div>
            <div className={classes.newPosts}>
                {postElements}
            </div>
        </div>
    )
}

export default MyPosts;