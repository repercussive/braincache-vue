<template>
  <span v-if="asSpan" :style="allStyles">
    <slot />
  </span>
  <div v-else :style="allStyles">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent, StyleValue } from 'vue'
export default defineComponent({
  name: 'Flex',
  computed: {
    allStyles() {
      let direction = this.column ? 'column' : 'row'
      if (this.reverse) direction += '-reverse'

      return {
        ...this.style,
        display: 'flex',
        justifyContent: this.center ? 'center' : this.justify,
        alignItems: this.center ? 'center' : this.align,
        flexDirection: direction
      } as StyleValue
    }
  },
  props: {
    align: {
      type: String,
      default: 'flex-start'
    },
    justify: {
      type: String,
      default: 'flex-start'
    },
    column: {
      type: Boolean,
      default: false
    },
    reverse: {
      type: Boolean,
      default: false
    },
    center: {
      type: Boolean,
      default: false
    },
    asSpan: {
      type: Boolean,
      default: false
    },
    style: Object
  }
})
</script>