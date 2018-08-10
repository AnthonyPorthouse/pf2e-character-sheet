import Vue from 'vue';

import statService from '../services/statService';

import stats from '../assets/data/stats.json';

const state = {
    flaws: {},
    boosts: {},

    statKeys: [],
    stats: {},
};

const mutations = {
    addFlaw(state, payload) {
        Vue.set(state.flaws, payload.source, payload.stat);
    },
    removeFlaw(state, source) {
        Vue.delete(state.flaws, source);
    },
    addBoost(state, payload) {
        Vue.set(state.boosts, payload.source, payload.stat);
    },
    removeBoost(state, source) {
        Vue.delete(state.boosts, source);
    },
};

const actions = {};

const getters = {
    allStats() {
        return state.statKeys;
    },

    getFlaws: () => (stat) => {
        return Object.keys(state.flaws)
            .filter((key) => state.flaws[key] === stat)
            .reduce((object, key) => object[key] = state.flaws[key], {});
    },

    getBoosts: () => (stat) => {
        return Object.keys(state.boosts)
            .filter((key) => state.boosts[key] === stat)
            .reduce((object, key) => object[key] = state.boosts[key], {});
    }
};

Array.from(stats).forEach((data) => {
    const abbreviation = data.abbreviation;

    state.statKeys.push(abbreviation);

    state.stats[abbreviation] = {
        abbreviation: data.abbreviation,
        name: data.name,
    };

    getters[data.abbreviation] = (state, getters) => {
        let stat = state.stats[abbreviation];
        stat.value = statService.calculateStat(stat.abbreviation, {
            flaws: getters.getFlaws(abbreviation),
            boosts: getters.getBoosts(abbreviation),
        });
        stat.modifier = statService.calculateModifier(stat.value);

        return stat;
    };
});

export default {
    namespaced: true,

    state,
    mutations,
    actions,
    getters,
};
