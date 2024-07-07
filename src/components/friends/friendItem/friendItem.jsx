import classes from "./friendItem.module.css"

const FriendItem = (props) => {
    return (

        <div className="container">
            <div className="row">
                <div className={classes.friendItem}>
                    <img src={props.imgSrc} alt={props.name} />
                    <span>{props.name}</span>
                </div>
            </div>
        </div>

    )
}

export default FriendItem;