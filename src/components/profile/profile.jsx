import MyPosts from "./myPosts/MyPosts";
import classes from "./profile.module.css"
import ProfileInfo from "./profileInfo/profileInfo";

const Profile = () => {



    return (
        <div>
            <ProfileInfo />
            <MyPosts />
        </div>
    )
}

export default Profile;