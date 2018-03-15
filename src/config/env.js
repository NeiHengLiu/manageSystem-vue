/**
 * 配置编译环境和线上环境之间的切换
 * 
 * baseUrl: 域名地址
 */

let baseUrl = '';

if (process.env.NODE_ENV == 'development') {
    baseUrl = 'https://www.easy-mock.com/mock/5aa8d3d82e74616d75917b9b/manageSystem-vue'
} else if (process.env.NODE_ENV == 'production') {
    baseUrl = 'https://www.easy-mock.com/mock/5aa8d3d82e74616d75917b9b/manageSystem-vue'
}

export {
    baseUrl
}