
import axios from "axios";
import UserContainer from "./user/userContainer";
import classes from "./users.module.css"
import { Component } from "react";

class Users extends Component {

    constructor(props) {
        super(props)
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            this.props.setUsers(response.data.items);
        });
    }

    render = () => {
        return (
            <div className={classes.usersAll}>
                <h1>Users</h1>
                <div className={classes.userContent}>
                    {this.props.users.map(user => (
                        <UserContainer
                            key={user.id}
                            id={user.id}
                            name={user.name}
                            imgSrc={user.imgSrc}
                            city={user.city}
                            country={user.country}
                            messages={user.messages}
                            isFollowed={user.isFollowed}
                        />
                    ))}
                    (
                    )
                </div>
            </div>
        )
    }
}

export default Users;