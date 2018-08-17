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
      v-for="(boost, index) in boosts"
      :boost="true"
      :value="boost"
      :unique-key="`race.${index}`"
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
                this.setSelectedRace(race);
            },
        },

        boosts() {
            return this.getSelectedRace ? this.getSelectedRace.boosts : [];
        },
    },

    methods: {
        ...mapMutations('races', [
            'setSelectedRace',
        ])
    }
}
</script>
