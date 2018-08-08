<template>
  <div class="CharacterSheet">
    <Character/>
  </div>
</template>

<script>
// @ is an alias to /src
import Character from '@/components/Character.vue'

export default {
  name: 'CharacterSheet',
  components: {
    Character
  },
}
</script>
