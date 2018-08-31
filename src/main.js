// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './css/base.css';
import './css/style.css';
import public_m from './public_m'
import VueResource from 'vue-resource';
Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(public_m);
Vue.use(VueResource);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
