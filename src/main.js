import Vue from 'vue'

// import router
import VueRouter from 'vue-router'
// import router setting
import RouterSetting from './router/config.js'
// import simple store
import VueSimpleStore from './libs/vue-simple-store.min.js';



Vue.use(VueRouter);

const router = new VueRouter();
router.map(RouterSetting);
router.start({}, '#app')
