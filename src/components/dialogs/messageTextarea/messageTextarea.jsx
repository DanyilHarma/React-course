import React from "react"
import classes from "./messageTextarea.module.css"

let messageElement = React.createRef();

let sendMessage = () => {
    let message = messageElement.current.value;
    alert(message);
}

const MessageTextarea = () => {
    return (
        <div className={classes.textarea}>
            <textarea name="" id="" ref={messageElement}></textarea>
            <button onClick={sendMessage}>Send</button>
        </div>
    )
}

export default MessageTextarea;