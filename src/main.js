console.log(process.env.NODE_ENV === 'development' ? 'dev' : 'prod');
console.log("runtime env = " + uni.getSystemInfoSync().platform);

console.log("uni.getSystemInfoSync() = " + JSON.stringify(uni.getSystemInfoSync()));

import Vue from 'vue'
import App from './App'
import store from './store'

import * as global from '@/utils/global.js'
Vue.prototype.$global = global;

global.registerGlobalVueCompoments("../views/");

Vue.config.productionTip = false
App.mpType = 'app'
Vue.prototype.$store = store
App.mpType = 'app'

const app = new Vue({
	store,
  ...App
})
app.$mount()
