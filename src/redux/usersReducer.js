import { usersApi } from "../api/api"

const FOLLOW_USER = "FOLLOW-USER"
const UNFOLLOW_USER = "UNFOLLOW_USER"
const SET_USERS = "SET-USERS"
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING"
const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE_IS_FOLLOWING_PROGRESS"

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 51,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
}

const userReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW_USER:
            return {
                ...state,
                users: state.users.map(user => user.id === action.userId ? { ...user, followed: true } : user)
            }
        case UNFOLLOW_USER:
            return {
                ...state,
                users: state.users.map(user => user.id === action.userId ? { ...user, followed: false } : user)
            }
        case SET_USERS:
            return {
                ...state,
                users: action.users
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.pageNumber
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFetching ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        default: return state;
    }
}

export const followSuccess = (userId) => ({ type: FOLLOW_USER, userId });

export const unfollowSuccess = (userId) => ({ type: UNFOLLOW_USER, userId });

export const toggleFollowingInProgress = (isFetching, userId) => ({ type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId })

export const setUsers = (users) => ({ type: SET_USERS, users });

export const setCurrentPage = (pageNumber) => ({ type: SET_CURRENT_PAGE, pageNumber });

export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching });



export const getCurrentPage = (page, pageSize) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true));
        dispatch(setCurrentPage(page));
        usersApi.getUsers(page, pageSize).then(response => {
            dispatch(toggleIsFetching(false));
            dispatch(setUsers(response.items));
        })
    }
}

export const follow = (id) => {
    return (dispatch) => {
        dispatch(toggleFollowingInProgress(true, id));
        return usersApi.setFollow(id).then(response => {
            if (response.resultCode === 0) {
                dispatch(followSuccess(id))
            }
            dispatch(toggleFollowingInProgress(false, id));
        })
    }
}

export const unfollow = (id) => {
    return (dispatch) => {
        dispatch(toggleFollowingInProgress(true, id));
        return usersApi.deleteFollow(id).then(response => {
            if (response.resultCode === 0) {
                dispatch(unfollowSuccess(id))
            }
            dispatch(toggleFollowingInProgress(false, id));
        })
    }
}

export default userReducer;

// if (props.users.length === 0) {
//     props.setUsers(
//         [
//             {
//                 id: 1,
//                 name: "Katara",
//                 imgSrc: "https://avatars.dzeninfra.ru/get-zen_doc/3964212/pub_6121075179caa304e0572638_61210a0484456f3ce506a4fa/scale_1200",
//                 country: "Kingdom of water",
//                 city: "Southern water tribe",
//                 isFollowed: true,
//                 messages: [
//                     {
//                         id: 1,
//                         message: "Hey, do you remember about the water magic classes?"
//                     }
//                 ]
//             },
//             {
//                 id: 2,
//                 name: "Sokka",
//                 imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi7_FmKxSfH40-VpbgsZQ6VJPCBjBGSqhk8g&s",
//                 country: "Kingdom of water",
//                 city: "Southern water tribe",
//                 isFollowed: true,
//                 messages: [{
//                     id: 2,
//                     message: "Forget these classes, let's go play cards)"
//                 }]
//             },
//             {
//                 id: 3,
//                 name: "Tof",
//                 imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQspsyltX2AgKZuQTNfJiHEG54TwNuJUhzjUA&s",
//                 country: "Kingdom of earth",
//                 city: "Gaolin",
//                 isFollowed: true,
//                 messages: [{
//                     id: 3,
//                     message: "Forget about everything except earth magic!"
//                 }]
//             },
//             {
//                 id: 4,
//                 name: "Zuko",
//                 imgSrc: "https://sun9-6.userapi.com/impf/kQOXCtyUJPt0lwENrEpgsncMdRBPF51_W5JeMQ/f_KFmwVsx3k.jpg?quality=96&as=32x18,48x27,72x40,108x61,160x90,240x135,360x202,480x270,540x304,640x360,720x405,1080x607,1280x720,1440x810,1920x1080&sign=80d49ff67a872032dc4dd6523ec182ef&from=bu&u=d3NFbNge43jBMhaFUn7gsofoi4JYMD_r52Y613FqM2U&cs=604x340",
//                 country: "Kingdom of fire",
//                 city: "Kalderra",
//                 isFollowed: false,
//                 messages: [{
//                     id: 4,
//                     message: "Listen, I was thinking about killing dad, will you soon learn all your magic?"
//                 }]
//             }
//         ]
//     )
// }