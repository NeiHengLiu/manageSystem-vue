import { login, getUserInfo } from '../../api/getData'
import { getToken, setToken, removeToken } from '../../utils/token'

const user = {
    state: {
        token: getToken(),
        roles: [],
        name: '',
        date: '',
        status: '',
        id: ''
    },
    mutations: {
        SET_TOKEN (state, token) {
            state.token = token
        },
        SET_ROLES (state, roles) {
            state.roles = roles
        },
        SET_NAME (state, name) {
            state.name = name
        },
        SET_DATE (state, date) {
            state.date = date
        },
        SET_STATUS (state, status) {
            state.status = status
        },
        SET_ID (state, id) {
            state.id = id
        }
    },
    actions: {
        async loginByUser ({ commit }, loginInfo) {
            try{
                const res = await login({userName: loginInfo.userName, userPwd: loginInfo.userPwd});
                const data = res.data;
                commit('SET_TOKEN', data.token);
                setToken(data.token);
                return Promise.resolve(res);
            } catch(error){
                return Promise.reject(new Error('请求出错!'));
            }
        },
        async getUserInfo ({ commit, state }) {
            try{
                const res = await getUserInfo({token: state.token});
                const data = res.data;
                commit('SET_ROLES', data.roles);
                commit('SET_NAME', data.name);
                commit('SET_DATE', data.date);
                commit('SET_STATUS', data.status);
                commit('SET_ID', data.id);
                return Promise.resolve(res);
            } catch(error) {
                return Promise.error(new Error('请求出错！'));
            }
        }
    }
}

export default user