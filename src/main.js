import Vue from 'vue'
import VueRouter from 'vue-router'
import RouterSetting from './router/config.js'

Vue.use(VueRouter);

const router = new VueRouter();
router.map(RouterSetting);
router.start({}, '#app')
