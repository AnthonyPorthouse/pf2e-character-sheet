import Vue from 'vue';
import Vuex from 'vuex';

import stats from './stats';
import races from './races';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {},
    mutations: {},
    actions: {},
    modules: {
        stats,
        races
    }
})
