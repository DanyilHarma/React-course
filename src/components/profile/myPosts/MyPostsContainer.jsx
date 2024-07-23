import { connect } from "react-redux";
import { addPostCreator, updateNewPostTextCreator } from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";

const mapStateToProps = (state) => ({
    newPostText: state.profilePage.newPostText,
    posts: state.profilePage.posts
});

const mapDispatchToProps = (dispatch) => ({
    addPost: () => dispatch(addPostCreator()),
    onPostChange: (postMessage) => dispatch(updateNewPostTextCreator(postMessage))
});

export default connect(mapStateToProps, mapDispatchToProps)(MyPosts);



