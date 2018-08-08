<template>
  <div class="Stat">
    <span>{{ statName }}</span>
    <input
      type="number"
      min="0"
      v-model="statValue">

    <input
      type="text"
      readonly
      :value="statMod">
  </div>
</template>

<script>
    export default {
        name: 'Stat',

        props: {
            stat: {
                type: String,
                required: true,
            }
        },

        computed: {
            statName() {
                return this.getStat.name;
            },

            statValue: {
                get() {
                    return this.getStat.value;
                },
                set(value) {
                    this.$store.commit('stats/setStat', {
                        stat: this.stat,
                        value: value,
                    });
                }
            },

            statMod() {
                return this.getStat.modifier;
            },

            getStat() {
                if (!this.stat) {
                    return {
                        name: '',
                        abbreviation: '',
                        value: 10,
                        modifier: 0,
                    };
                }

                return this.$store.getters[`stats/${this.stat}`];
            },
        },

        methods: {

        }
    };
</script>