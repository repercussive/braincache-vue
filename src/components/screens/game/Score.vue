<template>
  <Flex center column>
    <span>Score</span>
    <Spacer :mb="4" />
    <div class="container">
      <Flex center asSpan :style="{ minWidth: '3.1ch', animation }">{{ displayedScore }}</Flex>
    </div>
  </Flex>
</template>

<script lang="ts">
import { ref, defineComponent, watchEffect } from 'vue'
import game from '@/logic/app/game'
import sleep from '@/logic/util/sleep'
import Flex from '@/components/modular/Flex.vue'
import Spacer from '@/components/modular/Spacer.vue'

const enterAnimation = 'enter forwards 400ms'
const exitAnimation = 'exit forwards 400ms'

let displayedScore = ref<number>()
let animation = ref<string>()
let isAnimating = false

watchEffect(async () => {
  if (game.state.status === 'correct-answer' && !isAnimating) {
    isAnimating = true
    await sleep(750)
    animation.value = exitAnimation
    await sleep(400)
    displayedScore.value = game.state.score
    animation.value = enterAnimation
  } else if (game.state.status !== 'correct-answer' && isAnimating) {
    isAnimating = false
  }
})

export default defineComponent({
  name: 'Score',
  created() {
    displayedScore.value = 0
    animation.value = enterAnimation
  },
  data() {
    return { displayedScore, animation }
  },
  components: {
    Flex,
    Spacer
  }
})
</script>

<style scoped lang="scss">
@use 'src/styles/util';

.container {
  padding: util.space(4) util.space(8);
  background-color: var(--color-accent);
  border-radius: var(--radius-default);
  overflow-x: hidden;
}
</style>