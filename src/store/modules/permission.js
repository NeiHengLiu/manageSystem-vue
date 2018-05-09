import { commonRouters, asyncRouters } from '../../router'

/**
 * 判断是否与当前用户权限匹配
 */
const hasPermission = (route, roles) => {
    console.log(route);
    console.log(roles);
    if(route.meta.role && roles.length){
        return roles.some(res => route.meta.role.indexOf(res) >= 0);
    } else {
        return false;
    }
}

/**
 * 返回符合当前登录用户的路由表
 */
const filterAsyncRouter = (asyncRouters, roles) => {
    const currentRouters = asyncRouters.filter(route => {
        if(hasPermission(route, roles)){
            return true;
        } else {
            return false;
        }

    });
    return currentRouters;
}

const permission = {
    state: {
        routers: commonRouters,
        addRouters: []
    },
    mutations: {
        SET_ROUTERS (state, routers) {
            state.addRouters = routers;
        }
    },
    actions: {
        getRouters ({ commit }, routersData) {
            return new Promise(resolve => {
                // console.log(commonRouters);
                // console.log(asyncRouters);
                // console.log(routersData);

                let currentRouters;
                currentRouters = filterAsyncRouter(asyncRouters, routersData);
                commit('SET_ROUTERS', currentRouters);
                resolve();
            })
        }
    }
}

export default permission;