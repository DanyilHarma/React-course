import { Component } from "react";
import { connect } from "react-redux";
import { setUser, setUserProfile } from "../../redux/profileReducer";
import Profile from "./profile";
import { useParams } from "react-router-dom"



class ProfileContainer extends Component {



    componentDidMount = () => {
        const userId = this.props.params.userId || 31495;
        this.props.setUser(userId);
    }

    render = () => {
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile} />
            </div>
        )
    }

}

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile
})

const UserIdContainerComponent = (props) => {
    const params = useParams();
    return <ProfileContainer {...props} params={params} />
}

export default connect(mapStateToProps, { setUserProfile, setUser })(UserIdContainerComponent);