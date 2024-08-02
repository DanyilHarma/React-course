import { connect } from "react-redux";
import User from "./user";
import { follow } from "../../../redux/usersReducer";


const mapStateToProps = (state, ownProps) => {
    const user = state.user.users.find(user => user.id === ownProps.id);
    return {
        ...user,
        users: state.user.users
    }
};

export default connect(mapStateToProps, { follow })(User);