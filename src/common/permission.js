import router from '../router'
import store from '../store'
import { Message } from 'element-ui'
import { getToken } from '../utils/token'

router.beforeEach((to, from, next) => {
	// console.log(to);
	// console.log(from);
    // console.log(next);
    // console.log(getToken());
    if(getToken()){
        if(to.path === '/'){
            next('/manage')
        } else {
            if(store.getters.roles.length === 0){
                store.dispatch('getUserInfo').then(res => {
                    const roles = store.getters.roles;
                    store.dispatch('getRouters', roles).then(() => {
                        router.addRoutes(store.getters.addRouters)
                        next({ ...to, replace: true })
                    })
                }).catch(() => {
                    next({path: '/'});
                })
            } else {
                next()
            }
        }
    } else {
        if(to.path === '/'){
            next()
        } else {
            Message.error('登录已过期，请重新登录！')
            next('/')
        }
    }
})