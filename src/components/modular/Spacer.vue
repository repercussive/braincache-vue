<template>
  <div :style="style">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent, StyleValue } from 'vue'

const convert = (value: number | string) => typeof value === 'string' ? value : `${value * 0.125}rem`

export default defineComponent({
  name: 'Spacer',
  computed: {
    style() {
      let value: StyleValue = {}
      if (this.mt) value.marginTop = convert(this.mt)
      if (this.mr) value.marginRight = convert(this.mr)
      if (this.mb) value.marginBottom = convert(this.mb)
      if (this.ml) value.marginLeft = convert(this.ml)
      return value
    }
  },
  props: {
    mt: [Number, String],
    mr: [Number, String],
    mb: [Number, String],
    ml: [Number, String]
  }
})
</script>