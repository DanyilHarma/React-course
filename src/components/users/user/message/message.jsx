import classes from "./message.module.css"

const Message = (props) => {
    return (
        <div className={classes.messageContainer}>
            <div>{props.message}</div>
        </div>
    )
}

export default Message;