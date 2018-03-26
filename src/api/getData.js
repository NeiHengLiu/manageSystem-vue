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

/**
 * 用户列表
 */

 export const userList = (data) => fetch('/dataManage/userList', data);

 /**
  * 食品列表
  */

export const foodList = () => fetch('/dataManage/foodList');

/**
 * 删除食品
 */

export const foodDelete = (data) => fetch('/dataManage/foodDelete', data);

/**
 * 食品分类
 */

export const foodClassify = () => fetch('/dataManage/foodClassify');

/**
 * 食品更新
 */

export const upFood = () => fetch('/dataManage/upFood');