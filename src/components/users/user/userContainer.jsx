import { connect } from "react-redux";
import User from "./user";
import { follow, followSuccess, toggleFollowingInProgress, unfollow, unfollowSuccess } from "../../../redux/usersReducer";


const mapStateToProps = (state, ownProps) => {
    const user = state.user.users.find(user => user.id === ownProps.id);
    return {
        ...user,
        users: state.user.users,
        followingInProgress: state.user.followingInProgress
    }
};

export default connect(mapStateToProps, { follow, unfollow, followSuccess, unfollowSuccess, toggleFollowingInProgress })(User);