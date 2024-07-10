import MyPosts from "./myPosts/MyPosts";
import classes from "./profile.module.css"
import ProfileInfo from "./profileInfo/profileInfo";


const Profile = (props) => {
    return (
        <div>
            <ProfileInfo />
            <MyPosts posts={props.posts} newPostText={props.newPostText} store={props.store} />
        </div>
    )
}

export default Profile;