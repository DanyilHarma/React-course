import classes from "./../dialogs.module.css"
import { NavLink } from "react-router-dom";


const DialogItem = (props) => {
    let path = "dialog/" + props.id;
    return (
        <div className={classes.dialog}>
            <NavLink to={path} className={({ isActive }) => isActive ? classes.active : undefined}><img src={props.imgSrc} />{props.name}</NavLink>
        </div>
    )
}




export default DialogItem;