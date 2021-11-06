import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import Dashboard from './modules/Dashboard/store';

export default new Vuex.Store({
    modules: {
        dashboard: Dashboard,
    }
});
