
import axios from "axios";
import UserContainer from "./user/userContainer";
import classes from "./users.module.css"
import { Component } from "react";

class Users extends Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items);
        });
    }

    setCurrentPage = (page) => {
        this.props.setCurrentPage(page);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items);
        });
    }

    render = () => {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);

        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }

        return (
            <div className={classes.usersAll}>
                <div className={classes.buttonSelect}>
                    {pages.map(page => {
                        return <span onClick={(event) => { this.setCurrentPage(page) }} className={this.props.currentPage === page ? classes.pageSelected : classes.page}>{page}</span>
                    })}
                </div>
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
            </div >
        )
    }
}

export default Users;