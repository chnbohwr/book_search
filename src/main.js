import Vue from 'vue'

import VueRouter from 'vue-router'
import RouterSetting from './router/config.js'
import VueSimpleStore from './libs/vue-simple-store.min.js';
import favoStore from 'store/favoriteStore';
Vue.use(VueRouter);

// Install it!
Vue.use( VueSimpleStore, {
  stores: [ favoStore ]
})

Vue.directive('img', function (value) {
    this.el.style.backgroundImage = `url("${value}")`;
})

const router = new VueRouter();
router.map(RouterSetting);
router.start({}, '#app')
