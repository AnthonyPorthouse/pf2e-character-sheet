<template>
  <div class="StatBlock">
    <Stat
      :key="stat"
      v-for="stat in allStats"
      :stat="stat" />
  </div>
</template>

<script>
    import { mapGetters } from 'vuex';

    import Stat from './Stat';

    export default {
        name: 'StatBlock',

        components: {
            Stat,
        },

        computed: {
            ...mapGetters('stats', [
                'allStats',
            ]),
        },
    };
</script>

<style scoped>
    .StatBlock {
        display: grid;
        grid-template-rows: 1fr 1fr;
        grid-column-gap: 1rem;
    }
</style>