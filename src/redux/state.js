
let state = {
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
        ]
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
            imgSrc: "data:image/jpeg;base64,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"
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
        ]
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
        },

        ]
    }
}

export default state;