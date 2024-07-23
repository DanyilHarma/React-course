import { NavLink } from "react-router-dom";
import classes from "./navbar.module.css"

import FriendItem from "../friends/friendItem";

const Nav = (props) => {
    let friendsElement = props.friend.map((friend, index) => <FriendItem key={index} name={friend.name} imgSrc={friend.imgSrc} />)

    return (
        <nav className={classes.nav}>
            <div className={classes.item}>
                <NavLink to="/profile" className={({ isActive }) => isActive ? classes.active : undefined}>Profile</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/users" className={({ isActive }) => isActive ? classes.active : undefined}>Users</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/dialogs" className={({ isActive }) => isActive ? classes.active : undefined}>Messages</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/news" className={({ isActive }) => isActive ? classes.active : undefined}>News</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/music" className={({ isActive }) => isActive ? classes.active : undefined}>Music</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/settings" className={({ isActive }) => isActive ? classes.active : undefined}>Settings</NavLink>
            </div>

            <div className={classes.friend}>
                <h1>Friends</h1>
                <div className={classes.friendItemContainer}>
                    {friendsElement}
                </div>
            </div>

        </nav >
    )
}

export default Nav;