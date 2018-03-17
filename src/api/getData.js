import fetch from '../config/fetch'

/**
 * 登录
 */

export const login = (data) => fetch('/login/login', data, 'POST');

/**
 * 退出登录
*/

export const logout = () => fetch('/login/logout');

/**
 * 首页统计数据
*/

export const statistical = () => fetch('/home/statistical');