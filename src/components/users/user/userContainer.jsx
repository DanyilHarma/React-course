import { connect } from "react-redux";
import User from "./user";



const mapStateToProps = (state, ownProps) => {
    const user = state.user.users.find(user => user.id === ownProps.id);
    return {
        ...user,
        users: state.user.users,
        followingInProgress: state.user.followingInProgress
    }
};

export default connect(mapStateToProps)(User);