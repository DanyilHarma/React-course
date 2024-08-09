import Message from "./message/message"
import DialogItem from "./dialogItem/dialogItem"
import classes from "./dialogs.module.css"
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import MessageTextarea from "./messageTextarea/messageTextarea";

const Dialogs = () => {

    const dialogs = useSelector(state => state.messagesPage.dialogs);
    const messages = useSelector(state => state.messagesPage.messages);
    const isAuth = useSelector(state => state.auth.isAuth);

    if (!isAuth) return <Navigate to={"/login"} />
    return (
        <div className={classes.dialogsContainer}>
            <h1 className={classes.hr}>Dialogs</h1>
            <div className={classes.dialogs}>
                <div className={classes.dialogsItems}>
                    {dialogs.map(dialog => <DialogItem key={dialog.id} name={dialog.name} id={dialog.id} imgSrc={dialog.imgSrc} />)}
                </div>
                <hr />
                <div className={classes.messages}>
                    {messages.map(message => <Message message={message.message} key={message.id} />)}
                    <MessageTextarea />
                </div>

            </div>
        </div>
    )
}

export default Dialogs;
