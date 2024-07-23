import React from "react"
import classes from "./messageTextarea.module.css"


const MessageTextarea = (props) => {
    const onSendMessage = () => {
        props.onSendMessage();
    }

    const onMessageChange = (e) => {
        let messageText = e.target.value;
        props.onMessageChange(messageText);
    }

    return (
        <div className={classes.textarea}>
            <textarea name="" id="" onChange={onMessageChange} placeholder="Print message..." value={props.newMessageText} />
            <button onClick={onSendMessage}>Send</button>
        </div>
    )
}

export default MessageTextarea;