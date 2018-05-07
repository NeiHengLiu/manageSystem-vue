import router from '../router'
import { Message } from 'element-ui'
import { getToken } from '../utils/token'

router.beforeEach((to, from, next) => {
	console.log(to);
	console.log(from);
    // console.log(next);
    console.log(getToken());
    if(getToken()){
        if(to.path === '/'){
            next('/manage')
        } else {
            next()
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