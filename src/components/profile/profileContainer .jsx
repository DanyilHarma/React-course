import { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { setUserProfile } from "../../redux/profileReducer";
import Profile from "./profile";
import { useParams } from "react-router-dom"
import { profileApi } from "../../api/api";


class ProfileContainer extends Component {



    componentDidMount = () => {
        const userId = this.props.params.userId || 31495;
        profileApi.setUserProfile(userId).then(data => {
            this.props.setUserProfile(data);
        });
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

export default connect(mapStateToProps, { setUserProfile })(UserIdContainerComponent);