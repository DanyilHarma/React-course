import { connect } from "react-redux"
import Users from "./users"
import { setCurrentPageCreator, setIsFetchingCreator, setUsersCreator } from "../../redux/usersReducer";
import { Component } from "react";
import axios from "axios";
import Preloader from "../common/preloader/preloader";



class UsersAPIComponent extends Component {

    componentDidMount() {
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(response.data.items);
        });
    }

    setCurrentPage = (page) => {
        this.props.toggleIsFetching(true);
        this.props.setCurrentPage(page);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`).then(response => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(response.data.items);
        });
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

const mapDispatchToProps = (dispatch) => ({
    setUsers: (users) => dispatch(setUsersCreator(users)),
    setCurrentPage: (pageNumber) => dispatch(setCurrentPageCreator(pageNumber)),
    toggleIsFetching: (isFetching) => dispatch(setIsFetchingCreator(isFetching))
});

export default connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent);