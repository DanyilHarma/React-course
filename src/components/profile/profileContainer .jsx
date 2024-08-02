import { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { setUserProfile } from "../../redux/profileReducer";
import Profile from "./profile";
import { useParams } from "react-router-dom"


class ProfileContainer extends Component {



    componentDidMount = () => {
        const userId = this.props.params.userId || 2;
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`).then(response => {
            this.props.setUserProfile(response.data);
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