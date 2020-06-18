import Vue from "vue";
import App from "./App.vue";
import router from "./router/index";
import store from "./store/index";
import * as netlifyIdentityWidget from "netlify-identity-widget";
import GoTrue from "gotrue-js";

// Initialize Netlify Identity
netlifyIdentityWidget.init();

//Initialize Goture JS for Netlify
export const auth = new GoTrue({
  APIUrl: "https://doubaobaba.netlify.app/.netlify/identity",
  setCookie: true
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
