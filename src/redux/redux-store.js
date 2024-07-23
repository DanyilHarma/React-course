import { combineReducers, legacy_createStore as createStore } from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import friendsReducer from "./friendsReducer";
import userReducer from "./usersReducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: dialogsReducer,
    friends: friendsReducer,
    user: userReducer
});

let store = createStore(reducers);

export default store;