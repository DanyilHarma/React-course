import classes from "./myPosts.module.css"
import Post from "./post/post";

const MyPosts = () => {
    return (
        <div className={classes.postsContainer}>
            <h6>My posts</h6>
            <div className={classes.newsContainer}>
                <textarea name="" id="" placeholder="Your news..."></textarea>
                <div className={classes.submitContainer}><div className={classes.submit}>Send</div></div>
            </div>
            <div className={classes.newPosts}>
                <Post src="https://avatars.dzeninfra.ru/get-zen_doc/3964212/pub_6121075179caa304e0572638_61210a0484456f3ce506a4fa/scale_1200" post="Hey,why everybody love me?!" count="33" />
                <Post src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi7_FmKxSfH40-VpbgsZQ6VJPCBjBGSqhk8g&s" post="Hey,where is my boomerang???" count="44" />
                <Post src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQspsyltX2AgKZuQTNfJiHEG54TwNuJUhzjUA&s" post="Give me all the stones!" count="22" />
            </div>
        </div>
    )
}

export default MyPosts;