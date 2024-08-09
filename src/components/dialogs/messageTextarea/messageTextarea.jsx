import React from "react"
import classes from "./messageTextarea.module.css"
import { useDispatch, useSelector } from "react-redux"
import { onMessageChange, onSendMessage } from "../../../redux/dialogsReducer"


const MessageTextarea = () => {

    const newMessageText = useSelector(state => state.messagesPage.newMessageText)
    const dispatch = useDispatch();

    const handleSendMessage = () => {
        dispatch(onSendMessage());
    }

    const handleMessageChange = (e) => {
        let messageText = e.target.value;
        dispatch(onMessageChange(messageText));
    }

    return (
        <div className={classes.textarea}>
            <textarea name="" id="" onChange={handleMessageChange} placeholder="Print message..." value={newMessageText} />
            <button onClick={handleSendMessage}>Send</button>
        </div>
    )
}

export default MessageTextarea;