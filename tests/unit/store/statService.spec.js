import StatService from '../../../src/services/statService';

describe('statService.js', () => {
    it('starts with a default of 10 in a stat', () => {
        const val = StatService.calculateStat('str', {});
        expect(val).toBe(10);
    });

    it('reduces stats by 2 with a flaw', () => {
        const val = StatService.calculateStat('str', {
            flaws: [
                {source: 'test'},
            ],
        });
        expect(val).toBe(8);
    });

    it('increases stats by 2 with a boost', () => {
        const val = StatService.calculateStat('str', {
            boosts: [
                {source: 'test'},
            ],
        });
        expect(val).toBe(12);
    });

    it('decreases stats to a minimum of 1', () => {
        const val = StatService.calculateStat('str', {
            flaws: [
                {source: 'test'},
                {source: 'test'},
                {source: 'test'},
                {source: 'test'},
                {source: 'test'},
            ],
        });
        expect(val).toBe(1);
    });

    it('increases stats by 1 when going above 18', () => {
        const val = StatService.calculateStat('str', {
            boosts: [
                {source: 'test'},
                {source: 'test'},
                {source: 'test'},
                {source: 'test'},
                {source: 'test'},
            ],
        });
        expect(val).toBe(19);
    });
});
