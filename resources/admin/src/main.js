window.Vue = require("vue");

import Vue from 'vue'
import VueRouter from 'vue-router';
import store from "./store";
import router from "./router";

import bootstrap from 'bootstrap';
import '@fortawesome/fontawesome-free/css/fontawesome.css';
import '@fortawesome/fontawesome-free/css/solid.css';
import '@fortawesome/fontawesome-free/css/regular.css';

// use
Vue.use(VueRouter);

import App from './App.vue'

Vue.config.productionTip = false

Vue.component('app', App);

const app = new Vue({
    el: "#app",
    router,
    store,
    render: h => h(App),
});
