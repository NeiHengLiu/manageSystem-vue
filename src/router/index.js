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

const routes = [
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
				meta: []
			},
			{
				path: '/userList',
				component: userList,
				meta: ['数据管理', '用户列表']
			},
			{
				path: '/businessList',
				component: businessList,
				meta: ['数据管理', '商家列表']
			},
			{
				path: '/foodList',
				component: foodList,
				meta: ['数据管理', '食品列表']
			},
			{
				path: '/orderList',
				component: orderList,
				meta: ['数据管理', '订单列表']
			},
			{
				path: '/adminList',
				component: adminList,
				meta: ['数据管理', '管理员列表']
			},
			{
				path: '/addShops',
				component: addShops,
				meta: ['添加数据', '添加商铺']
			},
			{
				path: '/addGoods',
				component: addGoods,
				meta: ['添加数据', '添加商品']
			}
		]
	}
]

export default new Router({
	routes
})
