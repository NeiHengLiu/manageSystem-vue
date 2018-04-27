import Vue from 'vue'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import vueQuillEditor from 'vue-quill-editor'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'

import App from './App'
import router from './router'
import store from './store'

Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(vueQuillEditor)

router.beforeEach((to, from, next) => {
	console.log(to);
	console.log(from);
	console.log(next);
	if(true){

	} else {

	}
})

new Vue({
	el: '#app',
	router,
	store,
	render: h => h(App)
})
