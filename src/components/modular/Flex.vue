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
  data({ column, reverse, center, align, justify, style }) {
    let direction = column ? 'column' : 'row'
    if (reverse) direction += '-reverse'

    if (center) {
      align = 'center'
      justify = 'center'
    }

    return {
      allStyles: {
        ...style,
        display: 'flex',
        justifyContent: justify,
        alignItems: align,
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