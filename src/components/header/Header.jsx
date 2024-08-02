import { NavLink } from "react-router-dom";
import classes from "./header.module.css"

const Header = (props) => {
    return (
        <header className={classes.header}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdO2X7jAx15Gw5yOpLeZrcrzn_k7XTWQmHAQ&s" />
            <div className={classes.authLogin}>
                {props.isAuth ?
                    <div className={classes.authUserInfo}><span>{props.login}</span> <span>{props.email}</span></div>
                    : <NavLink to={"/login"}>Login</NavLink>}
            </div>
        </header >
    )
}

export default Header;