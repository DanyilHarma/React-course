

let initialState =
{
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
    }]
}

const friendsReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default friendsReducer;