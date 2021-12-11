<template>
  <ViewportCentered>
    <span style="font-size: 1.5rem;">👏</span>
    <Spacer :mb="8" />
    <StyledContainer color="text-accent">That's a wrap!</StyledContainer>
    <Spacer :mb="12" />
    <LabelledScore label="Your score:" :score="score" />
    <Spacer :mb="14" />
    <Button @click="changeScreen('game')">Play again</Button>
    <Spacer :mb="8" />
    <Button @click="changeScreen('welcome')">Home</Button>
  </ViewportCentered>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import appScreen, { AppScreen } from '@/logic/app/appScreen'
import game from '@/logic/app/game'
import highScoreHandler from '@/logic/app/highScoreHandler'
import ViewportCentered from '@/components/modular/ViewportCentered.vue'
import Spacer from '@/components/modular/Spacer.vue'
import StyledContainer from '@/components/modular/StyledContainer.vue'
import LabelledScore from '@/components/modular/LabelledScore.vue'
import Button from '@/components/modular/Button.vue'

export default defineComponent({
  name: 'EndScreen',
  data() {
    return { score: highScoreHandler.mostRecentScore }
  },
  methods: {
    changeScreen(screen: AppScreen) {
      game.reset()
      appScreen.set(screen)
    }
  },
  components: {
    ViewportCentered,
    Spacer,
    StyledContainer,
    LabelledScore,
    Button
  }
})
</script>