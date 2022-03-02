<template>
  <span class="emoji">🧠</span>
  <Spacer :mb="1" />
  <h1>
    <span>brain</span>
    <span>cache</span>
  </h1>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Spacer from '@/components/modular/Spacer.vue'

export default defineComponent({
  components: {
    Spacer
  }
})
</script>

<style lang="scss">
.emoji {
  font-size: 1.5rem;
}

h1 > span:last-of-type {
  color: var(--color-logo-accent);
}
</style>