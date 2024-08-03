import UserContainer from "./user/userContainer";
import classes from "./users.module.css"


let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return (
        <div className={classes.usersAll}>
            <div className={classes.buttonSelect}>
                {pages.map(page => {
                    return <span key={page} onClick={(event) => { props.setCurrentPage(page) }} className={props.currentPage === page ? classes.pageSelected : classes.page}>{page}</span>
                })}
            </div>
            <h1>Users</h1>
            <div className={classes.userContent}>
                {props.users.map(user => (
                    <UserContainer
                        key={user.id}
                        id={user.id}
                        name={user.name}
                        imgSrc={user.photos.small}
                        city={user.city}
                        country={user.country}
                        messages={user.messages}
                        followed={user.followed}
                    />
                ))}
                (
                )
            </div>
        </div >
    )
}

export default Users;