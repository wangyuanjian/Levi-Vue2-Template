import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import i18n from './i18n';
import 'tailwindcss/tailwind.css';
import './element'
import NProgress from 'nprogress';
import 'nprogress/nprogress.css'

Vue.config.productionTip = false;

// NProgress 的一些配置
NProgress.configure({ 
  showSpinner: false,
  easing: 'ease',
  speed: 300,
});
// 配置路由切换的时候设置
router.beforeEach((to, from, next) => {
  NProgress.start();
  next();
})
router.afterEach(() => {
  NProgress.done();
})

const app = new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App),
}).$mount('#app');

// 下面的配置可选.
// 这个配置会在修改浏览器语言时生效, 如果不加这个配置, 改变浏览器语言后需要手动刷新页面才会生效
window.onlanguagechange = function() {
  app.$i18n.locale = navigator.language;
}