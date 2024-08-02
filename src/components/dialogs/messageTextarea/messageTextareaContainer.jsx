import { onSendMessage, onMessageChange } from "../../../redux/dialogsReducer";
import MessageTextarea from "./messageTextarea";
import { connect } from "react-redux";


const mapStateToProps = (state) => ({
    newMessageText: state.messagesPage.newMessageText
});

export default connect(mapStateToProps, { onSendMessage, onMessageChange })(MessageTextarea)

