import { onMessageChangeCreator, sendMessageCreator } from "../../../redux/dialogsReducer";
import MessageTextarea from "./messageTextarea";
import { connect } from "react-redux";


const mapStateToProps = (state) => ({
    newMessageText: state.messagesPage.newMessageText
});

const mapDispatchToProps = (dispatch) => ({
    onSendMessage: () => dispatch(sendMessageCreator()),
    onMessageChange: (messageText) => dispatch(onMessageChangeCreator(messageText))
});

export default connect(mapStateToProps, mapDispatchToProps)(MessageTextarea)
