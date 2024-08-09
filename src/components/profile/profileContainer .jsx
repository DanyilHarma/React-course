import { connect } from "react-redux";
import { setUser, setUserProfile } from "../../redux/profileReducer";
import Profile from "./profile";
import { Navigate, useParams } from "react-router-dom"
import { useEffect } from "react";



const ProfileContainer = (props) => {
    // debugger
    const params = useParams();

    useEffect(() => {
        const userId = params.userId || 31495;
        props.setUser(userId);
    }, [params.userId, setUser])


    if (!props.isAuth) return <Navigate to={"/login"} />

    return <div><Profile profile={props.profile} /></div>

}

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, { setUserProfile, setUser })(ProfileContainer);