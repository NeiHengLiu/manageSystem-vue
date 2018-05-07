import axios from 'axios'
import { baseUrl } from './env'

/**
 * 创建 axios 实例
 */

const service = axios.create({
    baseURL: baseUrl,
    timeout: 1000*30
});

/**
 * 添加请求拦截器
 */

service.interceptors.request.use(config => {
    // 在发送请求之前做些什么
    return config;
}, error => {
    // 对请求错误做些什么
    return Promise.reject(error);
});

/**
 * 添加响应拦截器
 */

service.interceptors.response.use(response => {
    // 对响应数据做点什么
    return response;
}, error => {
    // 对响应错误做点什么
    return Promise.reject(error);
});

/**
 * 封装请求
 */

export default (url, param = {}, type = 'GET') => {
    return new Promise((resolve, reject) => {
        if(type === 'GET'){
            service.get(url, {
                params: param
            })
            .then(response => {
                resolve(response.data);
            })
            .catch(error => {
                reject(error);
            });
        } else if(type === 'POST'){
            service.post(url, param)
            .then(response => {
                resolve(response.data);
            })
            .catch(error => {
                reject(error);
            });
        }
    });
}