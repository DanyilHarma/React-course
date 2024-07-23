
import UserContainer from "./user/userContainer";
import classes from "./users.module.css"

const Users = (props) => {

    let userElement = props.users.map(user => <UserContainer key={user.id} id={user.id} name={user.name} imgSrc={user.imgSrc} city={user.city} country={user.country} messages={user.messages} isFollowed={user.isFollowed} />)

    return (
        <div className={classes.usersAll}>
            <h1>Users</h1>
            <div className={classes.userContent}>
                {userElement}
            </div>
        </div>
    )
}

export default Users;