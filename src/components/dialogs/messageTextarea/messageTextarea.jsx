import React from "react"
import classes from "./messageTextarea.module.css"


let messageElement = React.createRef();




const MessageTextarea = (props) => {
    const sendMessage = () => {
        props.store.dispatch({ type: "SEND-MESSAGE" });
    }

    const onMessageChange = () => {
        let messageText = messageElement.current.value;
        props.store.dispatch({ type: "ON-MESSAGE-CHANGE", messageText: messageText });
    }

    return (
        <div className={classes.textarea}>
            <textarea name="" id="" ref={messageElement} onChange={onMessageChange} placeholder="Print message..." value={props.store.getState().messagesPage.newMessageText} />
            <button onClick={sendMessage}>Send</button>
        </div>
    )
}

export default MessageTextarea;