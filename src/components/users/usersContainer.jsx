import { connect } from "react-redux"
import Users from "./users"

const mapStateToProps = (state) => ({
    users: state.user.users
})

export default connect(mapStateToProps)(Users);