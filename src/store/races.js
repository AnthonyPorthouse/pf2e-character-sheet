import races from '../assets/data/races.json';

const state = {
    races,
    selectedRace: '',
};
const getters = {
    getRaces(state) {
        return state.races;
    },
    getSelectedRace(state) {
        return state.races.find(race => race.id === state.selectedRace);
    }
};
const mutations = {
    setSelectedRace(state, race) {
        state.selectedRace = race;
    }
};
const actions = {};

export default {
    namespaced: true,

    state,
    getters,
    mutations,
    actions,
};
