import React from "react"
import classes from "./messageTextarea.module.css"


let messageElement = React.createRef();




const MessageTextarea = (props) => {
    const sendMessage = () => {
        props.sendMessage();
        props.onMessageChange("");
    }

    const onMessageChange = () => {
        let messageText = messageElement.current.value;
        props.onMessageChange(messageText);
    }

    return (
        <div className={classes.textarea}>
            <textarea name="" id="" ref={messageElement} onChange={onMessageChange} placeholder="Print message..." />
            <button onClick={sendMessage} >Send</button>
        </div>
    )
}

export default MessageTextarea;