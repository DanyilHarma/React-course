import { useEffect, useState } from "react";
import classes from "./settings.module.css";

const Settings = (props) => {

    // const [counter, setCounter] = useState(0);
    // const [state, setState] = useState({
    //     title: "Hey",
    //     date: Date.now()
    // })

    // const increment = () => {
    //     setCounter(counter + 1)
    // }

    // const decrement = () => {
    //     setCounter(counter - 1)
    // }

    // const setTitle = () => {
    //     setState(prev => {
    //         return {
    //             ...prev,
    //             title: "Bye"
    //         }
    //     })
    // }

    // const [type, setType] = useState("users")
    // const [data, setData] = useState([])
    // const [pos, setPos] = useState({
    //     x: 0, y: 0
    // })

    // useEffect(() => {
    //     console.log()
    // })

    // useEffect(() => {
    //     fetch(`https://jsonplaceholder.typicode.com/${type}`)
    //         .then(response => response.json())
    //         .then(json => setData(json))
    // }, [type])

    // const mouseMoveHandler = event => {
    //     setPos({
    //         x: event.clientX,
    //         y: event.clientY
    //     })
    // }

    // useEffect(() => {
    //     window.addEventListener("mousemove", event => {

    //         return () => {
    //             window.removeEventListener("mousemove", mouseMoveHandler)
    //         }
    //     })
    // }, [])

    return (
        <div>
            {/* <h1 className={classes.countTitle}>Счетчик : {counter}</h1>
            <pre className={classes.state}>{JSON.stringify(state, null, 2)}</pre>
            <div className={classes.btnContainer}>
                <button className={classes.sendButton} onClick={increment}>Добавить</button>
                <button className={classes.deleteButton} onClick={decrement}>Убрать</button>
                <button className={classes.updateButton} onClick={setTitle}>Изменить</button>
            </div> */}
            {/* 
            <h1 className={classes.countTitle}>Русурс : {type}</h1>
            <div className={classes.btnContainer}>
                <button className={classes.sendButton} onClick={() => setType("users")}>Пользователи</button>
                <button className={classes.deleteButton} onClick={() => setType("todos")}>Todo</button>
                <button className={classes.updateButton} onClick={() => setType("posts")}>Посты</button>
            </div>
            {/* <pre className={classes.state}>{JSON.stringify(data, null, 2)}</pre> */}
            {/* <pre className={classes.state}>{JSON.stringify(pos, null, 2)}</pre> } */}
        </div>
    )
}

export default Settings;