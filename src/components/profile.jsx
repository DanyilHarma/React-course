import classes from "./profile.module.css"

const Profile = () => {
    return (
        <div className={classes.content}>
            <div className={classes.imageTop}>
            </div>
            <div>
                <div className={classes.infoUser}>
                    <div className={classes.avatar}> <img src="https://sm.ign.com/ign_ap/cover/a/avatar-gen/avatar-generations_hugw.jpg" alt="" /></div>
                    <div className={classes.description}>
                        <div>Avatar A.</div>
                        <div>Date of Birth: 23 July</div>
                        <div>City: Dubassary</div>
                        <div>Education: Samurai</div>
                        <div>Website: nope)</div>
                    </div>
                </div>
            </div>
            <div>
                <div className={classes.postsContainer}>
                    <h6>My posts</h6>
                    <div className={classes.newsContainer}>
                        <textarea name="" id="" placeholder="Your news..."></textarea>
                        <div className={classes.submitContainer}><div className={classes.submit}>Send</div></div>
                    </div>
                    <div className={classes.newPosts}>
                        <div className={classes.post}>
                            <div className={classes.circle}></div> <div>Hey,why everybody love me?!)</div>
                        </div>
                        <div className={classes.post}>
                            <div className={classes.circle}></div><div>Hey,its my new programm!)</div>
                        </div>
                    </div>
                </div>
            </div>
            <div>

            </div>
        </div>
    )
}

export default Profile;