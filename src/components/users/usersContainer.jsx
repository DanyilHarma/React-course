import { connect } from "react-redux"
import Users from "./users"
import { setCurrentPage, toggleIsFetching, setUsers, setCurrentPageThunk, getCurrentPage } from "../../redux/usersReducer";
import { useEffect } from "react";
import Preloader from "../common/preloader/preloader";
import { usersApi } from "../../api/api";
import { Navigate } from "react-router-dom";



const UsersAPIComponent = (props) => {


    useEffect(() => {
        props.toggleIsFetching(false);
        props.getCurrentPage(props.currentPage, props.pageSize)
    }, [toggleIsFetching, getCurrentPage, props.currentPage, props.pageSize])




    const handleCurrentPage = (page) => {
        props.getCurrentPage(page, props.pageSize);
    }


    if (!props.isAuth) return <Navigate to={"/login"} />
    return <>
        {props.isFetching ? <Preloader /> : null}
        <Users totalUsersCount={props.totalUsersCount}
            pageSize={props.pageSize} currentPage={props.currentPage} users={props.users}
            setCurrentPage={handleCurrentPage}
        />
    </>
}

const mapStateToProps = (state) => ({
    users: state.user.users,
    pageSize: state.user.pageSize,
    totalUsersCount: state.user.totalUsersCount,
    currentPage: state.user.currentPage,
    isFetching: state.user.isFetching,
    isAuth: state.auth.isAuth
})


export default connect(mapStateToProps,
    { setUsers, toggleIsFetching, getCurrentPage })(UsersAPIComponent);