import { connect } from "react-redux"
import Users from "./users"
import { setUsersCreator } from "../../redux/usersReducer";


const mapStateToProps = (state) => ({
    users: state.user.users
})

const mapDispatchToProps = (dispatch) => ({
    setUsers: (users) => dispatch(setUsersCreator(users))
});

export default connect(mapStateToProps, mapDispatchToProps)(Users);