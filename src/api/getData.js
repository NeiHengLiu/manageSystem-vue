import fetch from '../config/fetch'

/**
 * 登录
 */

export const login = (data) => fetch('/login/login', data, 'POST');