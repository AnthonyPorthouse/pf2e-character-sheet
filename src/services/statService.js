export default {
    /**
     * Calculate a state, taking information from the sore
     * @param {string} statName
     * @param {object} options
     */
    calculateStat(statName, options) {
        const baseStat = 10;
        const flaws = (options.flaws || {});
        const boosts = (options.boosts || {});

        let stat = Object.keys(flaws).reduce((carry) => (carry - 2) || 1, baseStat);
        stat = Object.keys(boosts).reduce((carry) => carry + (carry >= 18 ? 1 : 2), stat);

        return stat;
    },

    /**
     * Calculates a modifier for a given stat value
     * @param {number} value
     * @returns {number}
     */
    calculateModifier(value) {
        return Math.floor(value / 2) - 5;
    },

    /**
     * Gets all the Boosts/Flaws for a given stat
     * @param {string} stat
     * @param {object} modifiers
     */
    findModificationsForStat(stat, modifiers) {
        return Object.keys(modifiers)
            .filter((key) => modifiers[key] === stat)
            .reduce((carry, key) => {
                carry[key] = modifiers[key];
                return carry
            }, {});
    }
}
