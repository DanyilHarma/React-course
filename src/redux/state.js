const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SEND_MESSAGE = "SEND-MESSAGE";
const ON_MESSAGE_CHANGE = "ON-MESSAGE-CHANGE";

let store = {
    _state: {
        profilePage: {
            posts: [
                {
                    id: 1,
                    src: "https://avatars.dzeninfra.ru/get-zen_doc/3964212/pub_6121075179caa304e0572638_61210a0484456f3ce506a4fa/scale_1200",
                    post: "Hey,why everybody love me?!",
                    count: 33
                },
                {
                    id: 2,
                    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi7_FmKxSfH40-VpbgsZQ6VJPCBjBGSqhk8g&s",
                    post: "Hey,where is my boomerang???",
                    count: 44
                },
                {
                    id: 3,
                    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQspsyltX2AgKZuQTNfJiHEG54TwNuJUhzjUA&s",
                    post: "Give me all the stones!",
                    count: 22
                }
            ],
            newPostText: ""
        },
        messagesPage: {
            dialogs: [{
                id: 1,
                name: "Katara",
                imgSrc: "https://avatars.dzeninfra.ru/get-zen_doc/3964212/pub_6121075179caa304e0572638_61210a0484456f3ce506a4fa/scale_1200"
            },
            {
                id: 2,
                name: "Sokka",
                imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi7_FmKxSfH40-VpbgsZQ6VJPCBjBGSqhk8g&s"
            },
            {
                id: 3,
                name: "Tof",
                imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQspsyltX2AgKZuQTNfJiHEG54TwNuJUhzjUA&s"
            },
            {
                id: 4,
                name: "Zuko",
                imgSrc: "https://sun9-6.userapi.com/impf/kQOXCtyUJPt0lwENrEpgsncMdRBPF51_W5JeMQ/f_KFmwVsx3k.jpg?quality=96&as=32x18,48x27,72x40,108x61,160x90,240x135,360x202,480x270,540x304,640x360,720x405,1080x607,1280x720,1440x810,1920x1080&sign=80d49ff67a872032dc4dd6523ec182ef&from=bu&u=d3NFbNge43jBMhaFUn7gsofoi4JYMD_r52Y613FqM2U&cs=604x340"
            },
            {
                id: 5,
                name: "Airo",
                imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmj6Z1fXwTxKa4WfZk7CF0oRUBHF3eK4hfvQ&s"
            },
            {
                id: 6,
                name: "Azai",
                imgSrc: "https://static.wikia.nocookie.net/zlodei/images/e/e7/Ozai_Render.png/revision/latest?cb=20220823182521&path-prefix=ru"
            }],

            messages: [{
                id: 1,
                message: "Hi"
            },
            {
                id: 2,
                message: "Hayohai"
            },
            {
                id: 3,
                message: "How akdk"
            },
            {
                id: 4,
                message: "sadasd"
            },
            {
                id: 5,
                message: "asfa"
            },
            {
                id: 6,
                message: "asdf"
            }
            ],
            newMessageText: ""
        },
        friends: {
            friend: [{
                id: 1,
                name: "Katara",
                imgSrc: "https://avatars.dzeninfra.ru/get-zen_doc/3964212/pub_6121075179caa304e0572638_61210a0484456f3ce506a4fa/scale_1200"
            },
            {
                id: 2,
                name: "Sokka",
                imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi7_FmKxSfH40-VpbgsZQ6VJPCBjBGSqhk8g&s"
            },
            {
                id: 3,
                name: "Tof",
                imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQspsyltX2AgKZuQTNfJiHEG54TwNuJUhzjUA&s"
            }
            ]
        }
    },
    _subscriber() {
        console.log("garma");
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._subscriber = observer;
    },

    dispatch(action) { // {type: "ADD-POST"}
        if (action.type === "ADD-POST") {
            let newPost = {
                id: 5,
                src: "//sm.ign.com/ign_ap/cover/a/avatar-gen/avatar-generations_hugw.jpg",
                post: this._state.profilePage.newPostText,
                count: 0
            }
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = "";
            this._subscriber(this.getState());
        } else if (action.type === "UPDATE-NEW-POST-TEXT") {
            this._state.profilePage.newPostText = action.postMessage
            this._subscriber(this.getState());
        }
        else if (action.type === "SEND-MESSAGE") {
            let message = {
                id: 7,
                message: this._state.messagesPage.newMessageText
            }
            this._state.messagesPage.messages.push(message);
            this._state.messagesPage.newMessageText = "";
            this._subscriber(this.getState());
        }
        else if (action.type === "ON-MESSAGE-CHANGE") {
            this._state.messagesPage.newMessageText = action.messageText;
            this._subscriber(this.getState());
        }
    }
};

export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostTextActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    postMessage: text
})
export const sendMessageActionCreator = () => ({ type: SEND_MESSAGE });
export const onMessageChangeActionCreator = (messageText) => ({
    type: ON_MESSAGE_CHANGE,
    messageText: messageText
})

export default store;