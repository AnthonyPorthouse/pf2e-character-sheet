<template>
  <div class="Race">
    <select
      v-model="race"
      name="race">
      <option>Select One</option>
      <option
        v-for="race in getRaces"
        :key="race.id"
        :value="race.id">
        {{ race.name }}
      </option>
    </select>

    <h2>Boosts</h2>
    <BoostFlaw
      v-for="(boost, i) in boosts"
      :key="`race.boost.${i}`"
      :boost="true"
      :value="boost"
      :unique-key="`race.${i}`"
    />

    <h2>Flaws</h2>
    <BoostFlaw
      v-for="(flaw, i) in flaws"
      :key="`race.flaw.${i}`"
      :boost="false"
      :value="flaw"
      :unique-key="`race.${i}`"
    />
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
import BoostFlaw from './BoostFlaw.vue';

export default {
    name: 'Race',

    components: {
        BoostFlaw,
    },

    computed: {
        ...mapGetters('races', [
            'getRaces',
            'getSelectedRace',
        ]),

        race: {
            get() {
                if (this.getSelectedRace) {
                    return this.getSelectedRace.id;
                }

                return {};
            },
            set(race) {
                this.boosts.forEach((boost, i) => {
                    this.unsetBoost(`race.${i}`);
                });
                this.flaws.forEach((boost, i) => {
                    this.unsetFlaw(`race.${i}`);
                });

                this.setSelectedRace(race);
            },
        },

        boosts() {
            return this.getSelectedRace ? this.getSelectedRace.boosts : [];
        },

        flaws() {
            return this.getSelectedRace ? this.getSelectedRace.flaws : [];
        },
    },

    methods: {
        ...mapMutations('races', [
            'setSelectedRace',
        ]),
        ...mapMutations('stats', [
            'unsetBoost',
            'unsetFlaw'
        ])
    }
}
</script>
