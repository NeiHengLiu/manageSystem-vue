import Vue from 'vue'
import Vuex from 'vuex'
import {  } from '../api/getData'
import login from '../store/modules/login'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        login
    }
})