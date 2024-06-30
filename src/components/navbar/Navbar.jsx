import { NavLink } from "react-router-dom";
import classes from "./navbar.module.css"

const Nav = () => {
    return (
        <nav className={classes.nav}>
            <div className={classes.item}>
                <NavLink to="/profile" className={({ isActive }) => isActive ? classes.active : undefined}>Profile</NavLink>
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
        </nav >
    )
}

export default Nav;