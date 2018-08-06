<template>
  <div class="Stat">
    <input
      type="number"
      min="0"
      v-model="statValue">

    <input
      type="text"
      readonly
      :value="getStatMod">
  </div>
</template>

<script>
    import {mapGetters} from 'vuex';

    export default {
        name: 'Stat',

        props: {
            stat: {
                type: String,
                required: true,
            }
        },

        computed: {
            statValue: {
                get() {
                    return this.getStat;
                },
                set(value) {
                    this.$store.commit('stats/setStat', {
                        stat: this.stat,
                        value: value,
                    });
                }
            },

            getStat() {
                if (!this.stat) {
                    return 10;
                }

                return this.$store.getters[`stats/${this.stat}`];
            },

            getStatMod() {
                if (!this.stat) {
                    return 0;
                }

                return this.$store.getters[`stats/${this.stat}Mod`];
            },
        },

        methods: {

        }
    };
</script>