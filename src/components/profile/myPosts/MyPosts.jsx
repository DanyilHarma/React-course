import classes from "./myPosts.module.css"
import Post from "./post/post";

const MyPosts = (props) => {



    let postElements = props.posts.map(post => <Post key={post.id} src={post.src} post={post.post} count={post.count} />)



    return (
        <div className={classes.postsContainer}>
            <h6>My posts</h6>
            <div className={classes.newsContainer}>
                <textarea name="" id="" placeholder="Your news..."></textarea>
                <div className={classes.submitContainer}><div className={classes.submit}>Send</div></div>
            </div>
            <div className={classes.newPosts}>
                {postElements}
            </div>
        </div>
    )
}

export default MyPosts;