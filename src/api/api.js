import axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': '8763fc73-614f-4013-b502-549dd18f0f18',
    },
})

export const API = {
    getAllUsers(pageSize, currentPage) {
        console.log(`users?count=${pageSize}&page=${currentPage}`);
        return instance.get(`users?count=${pageSize}&page=${currentPage}`)
            .then((response) => {
                return response.data;
            })
    },

    followUser(idUser) {
        return instance.post(`follow/${idUser}`)
            .then(response => {
                return response.data;
            })
    },

    unfollowUser(idUser) {
        return instance.delete(`follow/${idUser}`)
            .then(response => {
                return response.data;
            })
    },

    getAuth() {
        return instance.get('auth/me')
            .then((response) => {
                return response.data;
            })
    },

    getUserInfo(userId) {
        return instance.get(`profile/${userId}`)
            .then(response => {
                return response.data;
            })
    },

}

/*
const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': '8763fc73-614f-4013-b502-549dd18f0f18',
    },
})
*/


/*export const getUsers = (pageSize, currentPage) => {
    console.log(`users?count=${pageSize}&page=${currentPage}`);
    return instance.get(`users?count=${pageSize}&page=${currentPage}`)
        .then((response) => {
            return response.data;
        })
}*/

/*export const followUser = (idUser) => {
    return instance.post(`follow/${idUser}`)
        .then(response => {
            return response.data;
        })
}
export const unfollowUser = (idUser) => {
    return instance.delete(`follow/${idUser}`)
        .then(response => {
            return response.data;
        })
}

export const getAuth = () => {
    return instance.get('auth/me').then((response)=>{
        return response.data;
    })
}*/
