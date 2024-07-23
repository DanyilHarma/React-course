import { connect } from "react-redux";
import User from "./user";
import { followCreator } from "../../../redux/usersReducer";

const mapStateToProps = (state, ownProps) => {
    const user = state.user.users.find(user => user.id === ownProps.id);
    return {
        ...user
    }
};


const mapDispatchToProps = (dispatch) => ({
    follow: (userId) => dispatch(followCreator(userId))
});

export default connect(mapStateToProps, mapDispatchToProps)(User);