
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

import Vue from 'vue'

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

import Vuetify from 'vuetify/lib'
import VueRouter from 'vue-router'
import App from './App'
import { routes } from './routes';
import store from './store'

Vue.use(Vuetify)
Vue.use(VueRouter);
Vue.config.devtools = true;

const app = new Vue({
  router: new VueRouter({ mode: 'history', routes }),
  Vuetify,
  store,
  components: { App },
  template: '<App />',
}).$mount('#app');
