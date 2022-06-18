import axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': '8763fc73-614f-4013-b502-549dd18f0f18',
    },
})

export const API = {
    users: {
        getAllUsers(pageSize, currentPage) {
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
    },
    profile: {
        getUserInfo(userId) {
            return instance.get(`profile/${userId}`)
                .then(response => {
                    return response.data;
                })
        },
        getStatusProfile(userId) {
            return instance.get(`/profile/status/${userId}`)
                .then(response => {
                    return response.data;
                })
        },
        updateStatusProfile(newStatus) {
            return instance.put(`/profile/status`, {status: newStatus});
        },
    },
    auth: {
        getAuth() {
            return instance.get('auth/me')
                .then((response) => {
                    return response.data;
                })
        },
        login(payload) {
            return instance.post('auth/login', {
                email: payload.email,
                password: payload.password,
                rememberMe: payload.rememberMe,
                captcha: false,
            })
                .then((response) => {
                    return response.data;
                })
        },

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
