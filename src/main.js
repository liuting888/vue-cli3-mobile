import Vue from "vue";
import "amfe-flexible"; //750设计稿量多少写多少
import "normalize.css";
// import NProgress from 'nprogress'//进度条
// import 'nprogress/nprogress.css'
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Axios from "axios";
Vue.prototype.axios = Axios;
//来关闭生产模式下给出的提示
Vue.config.productionTip = false;
// router.beforeEach((to, from, next) => {
//   NProgress.start()
//   next()
// })

// router.afterEach(() => {
//   NProgress.done()
// })
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
