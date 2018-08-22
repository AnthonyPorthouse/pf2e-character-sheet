import races from '../assets/data/races.json';

const state = {
    /** @var {Array} */
    races,
    /** @var {string} */
    selectedRace: '',
};
const getters = {
    /**
     * Get all races in the store
     *
     * @param {Object} state
     * @return {Array}
     */
    getRaces(state) {
        return state.races;
    },

    /**
     * Gets the race specified by the `selectedRace` key
     *
     * @param {Object} state
     * @return {Object}
     */
    getSelectedRace(state) {
        return state.races.find(race => race.id === state.selectedRace);
    }
};
const mutations = {
    /**
     * Set the selected race
     *
     * @param {Object} state
     * @param {string} race
     */
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
