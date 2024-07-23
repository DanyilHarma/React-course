import MyPostsContainer from "./myPosts/MyPostsContainer";
import ProfileInfo from "./profileInfo/profileInfo";


const Profile = (props) => {

    return (
        <div>
            <ProfileInfo />
            <MyPostsContainer />
        </div>
    )
}

export default Profile;