import axios from 'axios';
let baseURL;

process.env.NODE_ENV === 'production' ?
    (baseURL = 'here should be your production endpoint') :
    (baseURL = 'https://reqres.in');

const service = axios.create({ withCredentials: false, baseURL });

const REQ_SERVICE = {

    login: async(user) => {
        return await service.post('/api/login', user);
    },
    users: async() => {
        return await service.get('/api/users')
    },
    user: async(id) => {
        return await service.get(`/api/users/${id}`)
    },
    update: async(id, data) => {
        return await service.patch(`/api/users/${id}`, data)

    }
};

export default REQ_SERVICE;