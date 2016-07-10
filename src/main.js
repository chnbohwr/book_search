import Vue from 'vue'
import VueRouter from 'vue-router'
import RouterSetting from './router/config.js'
import Vuex from 'vuex';
Vue.use(VueRouter);
Vue.use(Vuex);
const router = new VueRouter();
router.map(RouterSetting);
router.start({}, '#app')
