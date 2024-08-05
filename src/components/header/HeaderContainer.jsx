import { Component } from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { setAuth, setAuthUserId } from "../../redux/auth-reducer";


class HeaderContainer extends Component {

    componentDidMount = () => {

        this.props.setAuth()
    }

    render() {
        return (
            <Header {...this.props} />
        )
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    email: state.auth.email,
    login: state.auth.login
})

export default connect(mapStateToProps, { setAuthUserId, setAuth })(HeaderContainer)