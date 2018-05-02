import Vue from 'vue'
import Vuex from 'vuex'
import {  } from '../api/getData'
import app from '../store/modules/app'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        app
    }
})