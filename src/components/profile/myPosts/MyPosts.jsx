import React from "react"
import classes from "./myPosts.module.css"
import Post from "./post/post";
import { useDispatch, useSelector } from "react-redux";
import { addPost, onPostChange } from "../../../redux/profileReducer";

const MyPosts = () => {

    const posts = useSelector(state => state.profilePage.posts)
    const newPostText = useSelector(state => state.profilePage.newPostText)
    const dispatch = useDispatch();

    let postElements = posts.map(post => <Post key={post.id} src={post.src} post={post.post} count={post.count} />)

    const addNewPost = () => {
        dispatch(addPost());
    }

    const handlePostChange = (e) => {
        let postMessage = e.target.value;
        dispatch(onPostChange(postMessage));
    }

    return (
        <div className={classes.postsContainer}>
            <h6>My posts</h6>
            <div className={classes.newsContainer}>
                <textarea name="" onChange={handlePostChange} value={newPostText} placeholder="Print posts..." />
                <div className={classes.submitContainer}><div className={classes.submit} onClick={addNewPost}>Send</div></div>
            </div>
            <div className={classes.newPosts}>
                {postElements}
            </div>
        </div>
    )
}

export default MyPosts;