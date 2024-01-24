import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://apiluc.zendvn.com/api/',
    // timeout: 1000,
    headers: {
        'accept': 'application/json'
    }
});

export default axiosInstance;