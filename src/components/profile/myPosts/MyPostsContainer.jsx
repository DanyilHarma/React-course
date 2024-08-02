import { connect } from "react-redux";
import { addPost, onPostChange } from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";

const mapStateToProps = (state) => ({
    newPostText: state.profilePage.newPostText,
    posts: state.profilePage.posts
});

export default connect(mapStateToProps, { addPost, onPostChange })(MyPosts);



