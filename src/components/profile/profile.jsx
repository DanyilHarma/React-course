import MyPosts from "./myPosts/MyPosts";
import ProfileInfo from "./profileInfo/profileInfo";

const Profile = (props) => {




    return (
        <div>
            <ProfileInfo profile={props.profile} />
            <MyPosts />
        </div>
    )
}

export default Profile;