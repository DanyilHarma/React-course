import { combineReducers, legacy_createStore as createStore } from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import friendsReducer from "./friendsReducer";
import userReducer from "./usersReducer";
import authReducer from "./auth-reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: dialogsReducer,
    friends: friendsReducer,
    user: userReducer,
    auth: authReducer
});

let store = createStore(reducers);

window.store = store;

export default store;