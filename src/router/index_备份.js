import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const login = r => require.ensure([], () => r(require('../pages/login')), 'login');
const manage = r => require.ensure([], () => r(require('../pages/manage')), 'manage');
const home = r => require.ensure([], () => r(require('../pages/home')), 'home');
const userList = r => require.ensure([], () => r(require('../pages/userList')), 'userList');
const businessList = r => require.ensure([], () => r(require('../pages/businessList')), 'businessList');
const foodList = r => require.ensure([], () => r(require('../pages/foodList')), 'foodList');
const orderList = r => require.ensure([], () => r(require('../pages/orderList')), 'orderList');
const adminList = r => require.ensure([], () => r(require('../pages/adminList')), 'adminList');
const addShops = r => require.ensure([], () => r(require('../pages/addShops')), 'addShops');
const addGoods = r => require.ensure([], () => r(require('../pages/addGoods')), 'addGoods');
const userDistribution = r => require.ensure([], () => r(require('../pages/userDistribution')), 'userDistribution');
const richTextEditor = r => require.ensure([], () => r(require('../pages/richTextEditor')), 'richTextEditor');
const settingUp = r => require.ensure([], () => r(require('../pages/settingUp')), 'settingUp');
const instructions = r => require.ensure([], () => r(require('../pages/instructions')), 'instructions');
const page_401 = r => require.ensure([], () => r(require('../pages/401')), '401');

// 通用路由
export const commonRouters = [
	{
		path: '/',
		component: login
	},
	{
		path: '/manage',
		component: manage,
		children: [
			{
				path: '',
				component: home,
				meta: {
					role: ['general', 'admin'],
					crumbs: []
				}
			}
			// ,{
			// 	path: '/userList',
			// 	component: userList,
			// 	meta: {
			// 		role: ['general', 'admin'],
			// 		crumbs: ['数据管理', '用户列表']
			// 	}
			// },
			// {
			// 	path: '/businessList',
			// 	component: businessList,
			// 	meta: {
			// 		role: ['general', 'admin'],
			// 		crumbs: ['数据管理', '商家列表']
			// 	}
			// },
			// {
			// 	path: '/foodList',
			// 	component: foodList,
			// 	meta: {
			// 		role: ['general', 'admin'],
			// 		crumbs: ['数据管理', '食品列表']
			// 	}
			// },
			// {
			// 	path: '/orderList',
			// 	component: orderList,
			// 	meta: {
			// 		role: ['general', 'admin'],
			// 		crumbs: ['数据管理', '订单列表']
			// 	}
			// },
			// {
			// 	path: '/adminList',
			// 	component: adminList,
			// 	meta: {
			// 		role: ['general', 'admin'],
			// 		crumbs: ['数据管理', '管理员列表']
			// 	}
			// },
			// {
			// 	path: '/addShops',
			// 	component: addShops,
			// 	meta: {
			// 		role: ['general', 'admin'],
			// 		crumbs: ['添加数据', '添加商铺']
			// 	}
			// },
			// {
			// 	path: '/addGoods',
			// 	component: addGoods,
			// 	meta: {
			// 		role: ['general', 'admin'],
			// 		crumbs: ['添加数据', '添加商品']
			// 	}
			// },
			// {
			// 	path: '/userDistribution',
			// 	component: userDistribution,
			// 	meta: {
			// 		role: ['general', 'admin'],
			// 		crumbs: ['图表', '用户分布']
			// 	}
			// },
			// {
			// 	path: '/richTextEditor',
			// 	component: richTextEditor,
			// 	meta: {
			// 		role: ['admin'],
			// 		crumbs: ['编辑', '文本编辑']
			// 	}
			// },
			// {
			// 	path: '/settingUp',
			// 	component: settingUp,
			// 	meta: {
			// 		role: ['general', 'admin'],
			// 		crumbs: ['设置', '管理员设置']
			// 	}
			// },
			// {
			// 	path: '/instructions',
			// 	component: instructions,
			// 	meta: {
			// 		role: ['general', 'admin'],
			// 		crumbs: ['说明', '说明']
			// 	}
			// },
			// {
			// 	path: '/page_401',
			// 	component: page_401,
			// 	meta: {
			// 		role: ['general', 'admin']
			// 	}
			// }
		]
	}
]

export default new Router({
	routes: commonRouters
})

// 动态挂载路由
export const asyncRouters = [
	{
		path: '/userList',
		component: userList,
		meta: {
			role: ['general', 'admin'],
			crumbs: ['数据管理', '用户列表']
		}
	},
	{
		path: '/businessList',
		component: businessList,
		meta: {
			role: ['general', 'admin'],
			crumbs: ['数据管理', '商家列表']
		}
	},
	{
		path: '/foodList',
		component: foodList,
		meta: {
			role: ['general', 'admin'],
			crumbs: ['数据管理', '食品列表']
		}
	},
	{
		path: '/orderList',
		component: orderList,
		meta: {
			role: ['general', 'admin'],
			crumbs: ['数据管理', '订单列表']
		}
	},
	{
		path: '/adminList',
		component: adminList,
		meta: {
			role: ['general', 'admin'],
			crumbs: ['数据管理', '管理员列表']
		}
	},
	{
		path: '/addShops',
		component: addShops,
		meta: {
			role: ['general', 'admin'],
			crumbs: ['添加数据', '添加商铺']
		}
	},
	{
		path: '/addGoods',
		component: addGoods,
		meta: {
			role: ['general', 'admin'],
			crumbs: ['添加数据', '添加商品']
		}
	},
	{
		path: '/userDistribution',
		component: userDistribution,
		meta: {
			role: ['general', 'admin'],
			crumbs: ['图表', '用户分布']
		}
	},
	{
		path: '/richTextEditor',
		component: richTextEditor,
		meta: {
			role: ['admin'],
			crumbs: ['编辑', '文本编辑']
		}
	},
	{
		path: '/settingUp',
		component: settingUp,
		meta: {
			role: ['general', 'admin'],
			crumbs: ['设置', '管理员设置']
		}
	},
	{
		path: '/instructions',
		component: instructions,
		meta: {
			role: ['general', 'admin'],
			crumbs: ['说明', '说明']
		}
	},
	{
		path: '/page_401',
		component: page_401,
		meta: {
			role: ['general', 'admin']
		}
	}
]
