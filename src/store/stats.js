const state = {
    str: 10,
    dex: 10,
    con: 10,
    int: 10,
    wis: 10,
    cha: 10,

    strMod: 0,
    dexMod: 0,
    conMod: 0,
    intMod: 0,
    wisMod: 0,
    chaMod: 0,
};

const mutations = {
    setStat(state, payload) {
        state[payload.stat] = payload.value;
        state[`${payload.stat}Mod`] = Math.floor((payload.value - 10) / 2);
    }
};

const actions = {};

const getters = {
    str(state) {
        return state.str;
    },
    strMod(state) {
        return state.strMod;
    },
    dex(state) {
        return state.dex;
    },
    dexMod(state) {
        return state.dexMod;
    },
    con(state) {
        return state.con;
    },
    conMod(state) {
        return state.conMod;
    },
    int(state) {
        return state.int;
    },
    intMod(state) {
        return state.intMod;
    },
    wis(state) {
        return state.wis;
    },
    wisMod(state) {
        return state.wisMod;
    },
    cha(state) {
        return state.cha;
    },
    chaMod(state) {
        return state.chaMod;
    },
};

export default {
    namespaced: true,

    state,
    mutations,
    actions,
    getters,
};