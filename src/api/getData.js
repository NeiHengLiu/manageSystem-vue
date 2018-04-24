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

/**
 * 订单列表
*/

export const orderList = (data) => fetch('/dataManage/orderList', data);

/**
 * 管理员列表
 */

export const adminList = () => fetch('/dataManage/adminList');

/**
 * 添加商铺
 */

export const addShops = (data) => fetch('/addData/addShops', data, 'POST');

/**
 * 添加商品
 */

export const addGoods = (data) => fetch('/addData/addGoods', data, 'POST');

/**
 * 添加商品/添加食品种类
 */

export const addFoodTypes = (data) => fetch('/addData/addGoods/addFoodTypes', data, 'POST');

/**
 * 图表/用户分布
 */

 export const userDistribution = () => fetch('/chart/userDistribution');

 /**
  * 编辑/文本编辑
  */

export const richTextEditor = (data) => fetch('/editor/richTextEditor', data, 'POST');