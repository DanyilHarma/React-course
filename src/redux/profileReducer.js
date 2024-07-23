const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let initialState = {
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
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: let newPost = {
            id: state.posts.length + 1,
            src: "//sm.ign.com/ign_ap/cover/a/avatar-gen/avatar-generations_hugw.jpg",
            post: state.newPostText,
            count: 0
        }
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ""
            };
        case UPDATE_NEW_POST_TEXT: state.newPostText = action.postMessage;
            return {
                ...state,
                newPostText: action.postMessage
            };
        default: return state;
    }
}

export const addPostCreator = () => ({ type: ADD_POST });
export const updateNewPostTextCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    postMessage: text
})

export default profileReducer;