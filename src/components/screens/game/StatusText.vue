<template>
  <StyledContainer style="width: 15rem;">
    <Flex center>
      <p>{{ status }}</p>
    </Flex>
  </StyledContainer>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import game, { GameStatus } from '@/logic/app/game'
import StyledContainer from '@/components/modular/StyledContainer.vue'
import Flex from '@/components/modular/Flex.vue'

const textMap: Record<GameStatus, string> = {
  'waiting': 'Select the new word',
  'correct-answer': 'Nice!',
  'incorrect-answer': `You've seen that before.`,
  'ended': '(none)',
}

export default defineComponent({
  name: 'StatusText',
  computed: {
    status: () => textMap[game.state.status]
  },
  components: {
    StyledContainer,
    Flex
  }
})
</script>