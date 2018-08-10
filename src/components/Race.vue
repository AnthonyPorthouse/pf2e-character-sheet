<template>
  <div class="Race">
    <select name="race">
      <option
        v-for="race in races"
        :key="race.id"
        :value="race.id">
        {{ race }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
    name: 'Race',

    data() {
        return {
            races: import('../data/races')
        }
    },
}
</script>
