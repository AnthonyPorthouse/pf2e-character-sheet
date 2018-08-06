<template>
  <div class="StatBlock">
    <Stat stat="str"/>
    <Stat stat="dex"/>
    <Stat stat="con"/>
    <Stat stat="int"/>
    <Stat stat="wis"/>
    <Stat stat="cha"/>
  </div>
</template>

<script>
    import Stat from './Stat';

    export default {
        name: 'StatBlock',

        components: {
            Stat,
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