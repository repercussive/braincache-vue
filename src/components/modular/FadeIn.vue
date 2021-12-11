<template>
  <div :style="{ animation: `fade-in forwards ${time}ms ${delay}ms` }">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'FadeIn',
  props: {
    time: {
      type: Number,
      default: 300
    },
    delay: {
      type: Number,
      default: 0
    }
  }
})
</script>

<style lang="scss">
@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>