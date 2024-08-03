import { connect } from "react-redux"
import Users from "./users"
import { setCurrentPage, toggleIsFetching, setUsers } from "../../redux/usersReducer";
import { Component } from "react";
import Preloader from "../common/preloader/preloader";
import { usersApi } from "../../api/api";



class UsersAPIComponent extends Component {

    componentDidMount() {

        this.props.toggleIsFetching(true);
        usersApi.getUsers(this.props.currentPage, this.props.pageSize).then(response => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(response.items);
        })

    }

    setCurrentPage = (page) => {
        this.props.toggleIsFetching(true);
        this.props.setCurrentPage(page);
        usersApi.getUsers(page, this.props.pageSize).then(response => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(response.items);
        })
    }

    render = () => {
        return <>
            {this.props.isFetching ? <Preloader /> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize} currentPage={this.props.currentPage} users={this.props.users}
                setCurrentPage={this.setCurrentPage}
            />
        </>
    }
}

const mapStateToProps = (state) => ({
    users: state.user.users,
    pageSize: state.user.pageSize,
    totalUsersCount: state.user.totalUsersCount,
    currentPage: state.user.currentPage,
    isFetching: state.user.isFetching
})


export default connect(mapStateToProps,
    { setUsers, setCurrentPage, toggleIsFetching })(UsersAPIComponent);