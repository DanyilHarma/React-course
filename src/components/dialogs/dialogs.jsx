import Message from "./message/message"
import DialogItem from "./dialogItem/dialogItem"
import classes from "./dialogs.module.css"
import MessageTextareaContainer from "./messageTextarea/messageTextareaContainer";





const Dialogs = (props) => {
    return (
        <div className={classes.dialogsContainer}>
            <h1 className={classes.hr}>Dialogs</h1>
            <div className={classes.dialogs}>
                <div className={classes.dialogsItems}>
                    {props.state.messagesPage.dialogs.map(dialog => <DialogItem key={dialog.id} name={dialog.name} id={dialog.id} imgSrc={dialog.imgSrc} />)}
                </div>
                <hr />
                <div className={classes.messages}>
                    {props.state.messagesPage.messages.map(message => <Message message={message.message} key={message.id} />)}
                    <MessageTextareaContainer />
                </div>

            </div>
        </div>
    )
}

export default Dialogs;
