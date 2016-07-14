import Vue from 'vue'

import VueRouter from 'vue-router'
import RouterSetting from './router/config.js'
import VueSimpleStore from './libs/vue-simple-store.min.js';
import favoStore from 'store/favoriteStore';
import searchBookStore from 'store/searchBookStore';
import img from 'directive/img'
Vue.use(VueRouter);
Vue.use(img);
// Install it!
Vue.use( VueSimpleStore, {
  stores: [ favoStore, searchBookStore ],
  debug: true
})

const router = new VueRouter();
router.map(RouterSetting);
router.start({}, '#app')
