<template>
<div class="BoostFlaw">
   <span v-if="value !== '*'">
    {{ value }}
  </span>

  <select
    v-else
    @change="setValue"
    v-model="selectedValue">
    <option value="*">Choose One</option>
    <option
      v-for="stat in allStats"
      :value="stat"
      >
      {{ stat }}
    </option>
  </select>
</div>

</template>
<script>

import { mapGetters, mapMutations } from 'vuex'

export default {
    props: {
        boost: {
            type: Boolean,
            default: false,
        },
        uniqueKey: {
            type: String,
            default: '',
        },
        value: {
            type: String,
            default: '*',
        },
    },

    data() {
        return {
            selectedValue: this.value,
        };
    },

    computed: {
        ...mapGetters('stats', [
            'allStats',
        ]),
    },

    methods: {
        ...mapMutations('stats', [
            'setBoost',
            'setFlaw',
        ]),

        setValue() {
            if (this.boost) {
                this.setBoost({
                    source: this.uniqueKey,
                    stat: this.selectedValue
                });
            } else {
                this.setFlaw({
                    source: this.uniqueKey,
                    stat: this.selectedValue
                });
            }
        }
    },

    created() {
      this.setValue();
    },

    updated() {
        this.setValue();
    }
}
</script>
