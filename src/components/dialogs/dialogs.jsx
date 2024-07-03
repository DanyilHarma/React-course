import { NavLink } from "react-router-dom";
import classes from "./dialogs.module.css"

const DialogItem = (props) => {
    let path = "/dialog/" + props.id;
    return (
        <div className={classes.dialog}>
            <NavLink to={path} className={({ isActive }) => isActive ? classes.active : undefined}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={classes.message}>{props.message}</div>
    )
}

const Dialogs = (props) => {

    let dialogs = [{
        id: 1,
        name: "Katara"
    },
    {
        id: 2,
        name: "Sokka"
    },
    {
        id: 3,
        name: "Tof"
    },
    {
        id: 4,
        name: "Zuko"
    },
    {
        id: 5,
        name: "Airo"
    },
    {
        id: 6,
        name: "Azai"
    }
    ]

    let messages = [{
        id: 1,
        message: "Hi"
    },
    {
        id: 2,
        message: "Hayohai"
    },
    {
        id: 3,
        message: "How akdk"
    },
    {
        id: 4,
        message: "sadasd"
    },
    {
        id: 5,
        message: "asfa"
    },
    {
        id: 6,
        message: "asdf"
    }
    ]

    let dialogsElement = dialogs.map(dialog => <DialogItem key={dialog.id} name={dialog.name} id={dialog.id} />)
    let messagesElements = messages.map(message => <Message message={message.message} key={message.id} />)

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <h1>Dialogs</h1>
                {dialogsElement}
            </div>
            <div className={classes.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs;