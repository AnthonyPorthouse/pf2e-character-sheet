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
    setFlaw(state, payload) {
        Vue.set(state.flaws, payload.source, payload.stat);
    },
    unsetFlaw(state, source) {
        Vue.delete(state.flaws, source);
    },
    setBoost(state, payload) {
        Vue.set(state.boosts, payload.source, payload.stat);
    },
    unsetBoost(state, source) {
        Vue.delete(state.boosts, source);
    },
};

const actions = {};

const getters = {
    allStats() {
        return state.statKeys;
    },

    getBoosts() {
        return state.boosts;
    },

    getFlaws() {
        return state.flaws;
    },

    getFlawsForStat: () => (stat) => statService.findModificationsForStat(stat, state.flaws),

    getBoostsForStat: () => (stat) => statService.findModificationsForStat(stat, state.boosts),
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
            flaws: getters.getFlawsForStat(abbreviation),
            boosts: getters.getBoostsForStat(abbreviation),
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
