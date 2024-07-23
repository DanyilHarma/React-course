const SEND_MESSAGE = "SEND-MESSAGE";
const ON_MESSAGE_CHANGE = "ON-MESSAGE-CHANGE";

let initialState = {
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
        imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxH8BOXf7ojO6dkCSw2sTXevqgnzE08zEDUw&s"
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
}


const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE: let message = {
            id: state.messages.length + 1,
            message: state.newMessageText
        }
            return {
                ...state,
                messages: [...state.messages, message],
                newMessageText: ""
            };
        case ON_MESSAGE_CHANGE:
            return {
                ...state,
                newMessageText: action.messageText
            };
        default: return state;
    }
}

export const sendMessageCreator = () => ({ type: SEND_MESSAGE });
export const onMessageChangeCreator = (messageText) => ({
    type: ON_MESSAGE_CHANGE,
    messageText: messageText
})

export default dialogsReducer;