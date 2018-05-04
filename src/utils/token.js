import Cookies from 'js-cookie'

const tokenKey = 'user-token'

export const getToken = () => Cookies.get(tokenKey);

export const setToken = token => Cookies.set(tokenKey, token, { expires: 1, path: '' });

export const removeToken = () => Cookies.remove(tokenKey);