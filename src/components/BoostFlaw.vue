<template>
  <div class="BoostFlaw">
    <span v-if="value !== '*'">
      {{ value }}
    </span>

    <select
      v-else
      v-model="selectedValue">
      <option value="*">Choose One</option>
      <option
        v-for="stat in allStats"
        :key="stat"
        :value="stat">
        {{ stat }}
      </option>
    </select>
  </div>
</template>
<script>

import {mapGetters, mapMutations} from 'vuex'

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

    computed: {
        ...mapGetters('stats', [
            'allStats',
            'getBoosts',
            'getFlaws',
        ]),

        selectedValue: {
            get() {
                if (this.boost) {
                    return this.getBoosts[this.uniqueKey] || this.value;
                }

                return this.getFlaws[this.uniqueKey] || this.value;
            },
            set(value) {
                this.setValue(value);
            },
        },
    },

    methods: {
        ...mapMutations('stats', [
            'setBoost',
            'unsetBoost',
            'setFlaw',
            'unsetFlaw',
        ]),

        setValue(value) {
            if (this.boost) {
                return this.setBoost({
                    source: this.uniqueKey,
                    stat: value
                });
            }

            return this.setFlaw({
                source: this.uniqueKey,
                stat: value
            });
        },

        unsetValue() {
            if (this.boost) {
                return this.unsetBoost(this.uniqueKey);
            }

            return this.unsetFlaw(this.uniqueKey);
        }
    },

    created() {
        this.setValue(this.selectedValue);
    },
}
</script>
