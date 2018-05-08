import { commonRouters, asyncRouters } from '../../router'

const permission = {
    state: {
        routers: commonRouters,
        addRouters: []
    },
    mutations: {
        SET_ROUTERS (state, routers) {
            state.addRouters = routers
        }
    },
    actions: {
        getRouters ({ commit }, routersData) {
            return new Promise(resolve => {
                console.log(routersData);
                commit('SET_ROUTERS', asyncRouters);
                resolve()
            })
        }
    }
}

export default permission