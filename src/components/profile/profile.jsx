import MyPosts from "./myPosts/MyPosts";
import classes from "./profile.module.css"
import ProfileInfo from "./profileInfo/profileInfo";


const Profile = (props) => {
    d

    return (
        <div>
            <ProfileInfo />

            <MyPosts posts={props.posts} />

        </div>
    )
}

export default Profile;