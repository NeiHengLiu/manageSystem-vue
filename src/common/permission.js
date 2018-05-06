import router from '../router'
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
            next('/')
        }
    }
})