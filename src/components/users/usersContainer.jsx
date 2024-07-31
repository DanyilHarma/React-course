import { connect } from "react-redux"
import Users from "./users"
import { setCurrentPageCreator, setUsersCreator } from "../../redux/usersReducer";


const mapStateToProps = (state) => ({
    users: state.user.users,
    pageSize: state.user.pageSize,
    totalUsersCount: state.user.totalUsersCount,
    currentPage: state.user.currentPage
})

const mapDispatchToProps = (dispatch) => ({
    setUsers: (users) => dispatch(setUsersCreator(users)),
    setCurrentPage: (pageNumber) => dispatch(setCurrentPageCreator(pageNumber))
});

export default connect(mapStateToProps, mapDispatchToProps)(Users);