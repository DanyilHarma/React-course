import classes from "./post.module.css"

const Post = (props) => {
    return (
        <div className={classes.post}>
            <img src={props.src} alt="" /> <div>{props.post}</div> <div className={classes.like}><img src="https://img.freepik.com/free-vector/facebook-like-icon_1017-8081.jpg?size=338&ext=jpg&ga=GA1.1.1788614524.1719619200&semt=ais_user" alt="" /> <span>{props.count} </span></div>
        </div>
    )
}

export default Post;