import Vue from 'vue'

// router
import VueRouter from 'vue-router'
import RouterSetting from './router/config.js'

// store
import VueSimpleStore from './libs/vue-simple-store.min.js';
import favoStore from 'store/favoriteStore';
import searchBookStore from 'store/searchBookStore';

// directive
import img from 'directive/img';

// i18n localization
import en_us from 'i18n/en-us.js'
import zh_tw from 'i18n/zh-tw.js'
import es from 'i18n/es.js'
import vueI18n from 'vue-i18n';

// setting router
Vue.use(VueRouter);
const router = new VueRouter();
router.map(RouterSetting);

// add directive
Vue.use(img);

// setting store
Vue.use( VueSimpleStore, {
  stores: [ favoStore, searchBookStore ],
  debug: true
});

// setting localization
Vue.use(vueI18n);
Vue.locale('zh-tw', zh_tw);
Vue.locale('en-us', en_us);
Vue.locale('es', es);
Vue.config.lang = 'zh-tw';

// start App
router.start({}, '#app')
