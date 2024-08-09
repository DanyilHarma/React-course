import { useEffect } from "react";
import Header from "./Header";
import { connect, useDispatch } from "react-redux";
import { setAuth } from "../../redux/auth-reducer";



const HeaderContainer = (props) => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setAuth());
    }, [dispatch])

    return (
        <Header {...props} />
    )

}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    email: state.auth.email,
    login: state.auth.login
})

export default connect(mapStateToProps)(HeaderContainer)