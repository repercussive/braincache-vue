<template>
  <div :style="allStyles">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      fill="none"
    >
      <slot />
    </svg>
  </div>
</template>

<script lang="ts">
import { defineComponent, StyleValue } from 'vue'

export default defineComponent({
  name: 'Icon',
  computed: {
    allStyles() {
      return {
        ...this.style,
        fontSize: `${this.size}rem`,
        color: `var(--color-${this.color})`,
      } as StyleValue
    }
  },
  props: {
    size: {
      type: Number,
      default: 1
    },
    color: {
      type: String,
      default: 'text'
    },
    style: Object
  }
})
</script>