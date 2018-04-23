import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import vueQuillEditor from 'vue-quill-editor'
import 'element-ui/lib/theme-chalk/index.css'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'

Vue.config.productionTip = false

Vue.use(ElementUI);
Vue.use(vueQuillEditor);

new Vue({
	el: '#app',
	router,
	render: h => h(App)
})
