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
  data({ mt, mr, mb, ml }) {
    let style: StyleValue = {}
    if (mt) style.marginTop = convert(mt)
    if (mr) style.marginRight = convert(mr)
    if (mb) style.marginBottom = convert(mb)
    if (ml) style.marginLeft = convert(ml)

    return {
      style
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