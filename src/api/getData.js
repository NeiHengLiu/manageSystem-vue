import fetch from '../config/fetch'

/**
 * 登录
 */

export const login = (data) => fetch('/login/login', data, 'POST');

/**
 * 退出登录
*/

export const logout = () => fetch('/login/logout');