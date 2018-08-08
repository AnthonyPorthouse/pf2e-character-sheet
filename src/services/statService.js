export default {
    /**
     * Calculate a state, taking information from the sore
     * @param {string} statName
     * @param {object} options
     */
    calculateStat(statName, options) {
        const baseStat = 10;
        const flaws = (options.flaws || []);
        const boosts = (options.boosts || []);

        let stat = flaws.reduce((carry) => (carry - 2) || 1, baseStat);
        stat = boosts.reduce((carry) => carry + (carry >= 18 ? 1 : 2), stat);

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
}