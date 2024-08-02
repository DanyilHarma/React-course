import { Component } from "react";
import Header from "./Header";
import { connect } from "react-redux";
import axios from "axios";
import { setAuthUserId } from "../../redux/auth-reducer";

class HeaderContainer extends Component {

    componentDidMount = () => {

        axios.get("https://social-network.samuraijs.com/api/1.0/auth/me", { withCredentials: true }).then(response => {
            if (response.data.resultCode === 0) {
                let { id, login, email } = response.data.data
                this.props.setAuthUserId(id, login, email);
            }
        })
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

export default connect(mapStateToProps, { setAuthUserId })(HeaderContainer)