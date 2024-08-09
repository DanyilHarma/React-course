import Message from "./message/message";
import classes from "./user.module.css"
import image from "../../../assets/images/images.jpg"
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { follow, unfollow } from "../../../redux/usersReducer";



const User = (props) => {

    const dispatch = useDispatch();

    const handleFollow = () => {
        dispatch(follow(props.id))
    }

    const handleUnfollow = () => {
        dispatch(unfollow(props.id))
    }

    const isFollowed = props.followingInProgress.some(userId => userId === props.id);

    return (
        <div className={classes.user}>
            <div className={classes.userContent}>
                <div className={classes.img}>
                    <NavLink to={"/profile/" + props.id}><img src={props.imgSrc ? props.imgSrc : image} alt={props.name} /></NavLink>
                    <button disabled={isFollowed} className={classes.followButton} onClick={props.followed ? handleUnfollow : handleFollow}>
                        {props.followed ? "Unfollow" : "Follow"}
                    </button>
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
        </div >
    )
}

export default User;