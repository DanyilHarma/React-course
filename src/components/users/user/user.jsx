import Message from "./message/message";
import classes from "./user.module.css"
import image from "../../../assets/images/images.jpg"
import { NavLink } from "react-router-dom";
import { usersApi } from "../../../api/api";

const User = (props) => {

    const handleFollow = () => {
        usersApi.setFollow(props.id)
            .then(response => {
                if (response.resultCode === 0) {
                    props.follow(props.id)
                }
            })
    }

    const handleUnfollow = () => {
        usersApi.deleteFollow(props.id)
            .then(response => {
                if (response.resultCode === 0) {
                    props.unfollow(props.id)
                }
            })

    }
    return (
        <div className={classes.user}>
            <div className={classes.userContent}>
                <div className={classes.img}>
                    <NavLink to={"/profile/" + props.id}><img src={props.imgSrc ? props.imgSrc : image} alt={props.name} /></NavLink>
                    {props.followed ? (<div className={classes.followButton} onClick={handleUnfollow}>Unfollow</div>)
                        : (<div className={classes.followButton} onClick={handleFollow}>Follow</div>)}
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