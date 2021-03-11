import axios from 'axios';
let baseURL;

process.env.NODE_ENV === 'production' ?
    (baseURL = 'here should be your production endpoint') :
    (baseURL = 'https://jsonplaceholder.typicode.com');

const service = axios.create({ withCredentials: false, baseURL });

const JSON_SERVICE = {
    posts: async(id) => {
        return await service.get(`/posts?userId=${id}`);
    },
    albums: async(id) => {
        return await service.get(`/users/${id}/albums`);
    },
    photos: async(id) => {
        return await service.get(`/albums/${id}/photos`);
    },
    deletePost: async(id) => {
        return await service.delete(`/posts/${id}`);

    }
};

export default JSON_SERVICE;