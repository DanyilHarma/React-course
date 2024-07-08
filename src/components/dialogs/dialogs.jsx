

import Message from "./message/message"
import DialogItem from "./dialogItem/dialogItem"
import classes from "./dialogs.module.css"
import MessageTextarea from "./messageTextarea/messageTextarea";




const Dialogs = (props) => {

    const { dialogs, messages } = props;

    let dialogsElement = dialogs.map(dialog => <DialogItem key={dialog.id} name={dialog.name} id={dialog.id} imgSrc={dialog.imgSrc} />)
    let messagesElements = messages.map(message => <Message message={message.message} key={message.id} />)

    return (
        <div className={classes.dialogsContainer}>
            <h1 className={classes.hr}>Dialogs</h1>
            <div className={classes.dialogs}>
                <div className={classes.dialogsItems}>
                    {dialogsElement}
                </div>
                <hr />
                <div className={classes.messages}>
                    {messagesElements}
                    <MessageTextarea />
                </div>

            </div>
        </div>
    )
}

export default Dialogs;