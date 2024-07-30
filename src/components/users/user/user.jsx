import Message from "./message/message";
import classes from "./user.module.css"


const User = (props) => {

    const follow = () => {
        props.follow(props.id);
    }

    return (
        <div className={classes.user}>
            <div className={classes.userContent}>
                <div className={classes.img}>
                    <img src={props.imgSrc} alt={props.name} />
                    <div className={classes.followButton} onClick={follow}>{props.isFollowed ? "Unfollow" : "Follow"}</div>
                </div>
                <div className={classes.userInfo}>
                    <div className={classes.userNameMessage}>
                        <div className={classes.name}>{props.name}</div>
                        {/* {props.messages.map(message => <Message key={message.id} message={message.message} />)} */}
                    </div>
                    <div className={classes.residence}>
                        {props.country}, <br /> {props.city}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default User;