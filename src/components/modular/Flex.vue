<template>
  <span v-if="asSpan" :style="allStyles">
    <slot />
  </span>
  <div v-else :style="allStyles">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent, StyleValue, PropType } from 'vue'

type AlignMode = 'flex-start' | 'stretch' | 'center' | 'flex-start' | 'flex-end' | 'baseline'
type JustifyMode = 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly'

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
      type: String as PropType<AlignMode>,
      default: 'flex-start'
    },
    justify: {
      type: String as PropType<JustifyMode>,
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