import Vue from 'vue';

import stats from '../assets/data/stats.json';

const state = {
};

const mutations = {
    setStat(state, payload) {
        Vue.set(state[payload.stat], 'value', payload.value);
        Vue.set(state[payload.stat], 'mod', Math.floor((payload.value - 10) / 2));
    }
};

const actions = {};

const getters = {
    allStats() {
        return Object.keys(state);
    },
};

Array.from(stats).forEach((data) => {
    state[data.abbreviation] = {
        abbreviation: data.abbreviation,
        name: data.name,
        value: 10,
        mod: 0,
    };

    getters[data.abbreviation] = (state) => {
        return state[data.abbreviation];
    };
});

export default {
    namespaced: true,

    state,
    mutations,
    actions,
    getters,
};