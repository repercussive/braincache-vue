<template>
  <Flex center>
    <span>{{ label }}</span>
    <Spacer :mr="5" />
    <span class="score">{{ score }}</span>
  </Flex>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Flex from '@/components/modular/Flex.vue'
import Spacer from '@/components/modular/Spacer.vue'

export default defineComponent({
  name: 'ScoreDisplay',
  props: {
    label: String,
    score: Number
  },
  components: {
    Flex,
    Spacer
  }
})
</script>

<style scoped lang="scss">
@use 'src/styles/util';

.score {
  padding: util.space(5) util.space(8);
  background-color: var(--color-accent);
  border-radius: var(--radius-default);
}
</style>