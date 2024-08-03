import axios from "axios";

const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "9cfa49bc-e944-483f-9843-56260c92ced1"
    },
    withCredentials: true
})


export const profileApi = {
    setUserProfile(userId) {
        return instance.get(`profile/${userId}`)
            .then(response => response.data)
    }
}

export const usersApi = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
    setFollow(id) {
        return instance.post(`follow/${id}`)
            .then(response => response.data)
    },
    deleteFollow(id) {
        return instance.delete(`follow/${id}`)
            .then(response => response.data)
    }
}




