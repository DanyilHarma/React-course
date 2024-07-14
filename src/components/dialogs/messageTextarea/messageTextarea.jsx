import React from "react"
import classes from "./messageTextarea.module.css"
import { onMessageChangeActionCreator, sendMessageActionCreator } from "../../../redux/state";


let messageElement = React.createRef();


const MessageTextarea = (props) => {
    const sendMessage = () => {
        props.store.dispatch(sendMessageActionCreator());
    }

    const onMessageChange = () => {
        let messageText = messageElement.current.value;
        props.store.dispatch(onMessageChangeActionCreator(messageText));
    }

    return (
        <div className={classes.textarea}>
            <textarea name="" id="" ref={messageElement} onChange={onMessageChange} placeholder="Print message..." value={props.store.getState().messagesPage.newMessageText} />
            <button onClick={sendMessage}>Send</button>
        </div>
    )
}

export default MessageTextarea;