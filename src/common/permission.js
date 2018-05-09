import router from '../router'
import store from '../store'
import { Message } from 'element-ui'
import { getToken } from '../utils/token'

router.beforeEach((to, from, next) => {
    if(getToken()){
        if(to.path === '/'){
            Message.success('您之前登录过，系统已自动登录！');
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
                    store.dispatch('fedLogout').then(res => {
                        if(res.data){
                            Message.error('拉取用户信息失败，请重新登录！')
                            next({path: '/'})
                        }
                    })
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