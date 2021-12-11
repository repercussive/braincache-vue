<template>
  <FadeIn>
    <ViewportCentered>
      <MainHeading />
      <Spacer :mb="8" />
      <StyledContainer>How many words can you hold in your head?</StyledContainer>
      <Spacer :mb="8" />
      <LabelledScore label="Your best score:" :score="highScore" />
      <Spacer :mb="8" />
      <Rules />
      <Spacer :mb="12" />
      <Button @click="startGame">Start</Button>
    </ViewportCentered>
  </FadeIn>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import appScreen from '@/logic/app/appScreen'
import highScoreHandler from '@/logic/app/highScoreHandler'
import MainHeading from '@/components/screens/welcome/MainHeading.vue'
import ViewportCentered from '@/components/modular/ViewportCentered.vue'
import FadeIn from '@/components/modular/FadeIn.vue'
import Spacer from '@/components/modular/Spacer.vue'
import StyledContainer from '@/components/modular/StyledContainer.vue'
import LabelledScore from '@/components/modular/LabelledScore.vue'
import Rules from '@/components/screens/welcome/Rules.vue'
import Button from '@/components/modular/Button.vue'

export default defineComponent({
  name: 'WelcomeScreen',
  data() {
    return { highScore: highScoreHandler.highScore }
  },
  methods: {
    startGame: () => appScreen.set('game')
  },
  components: {
    ViewportCentered,
    FadeIn,
    Spacer,
    StyledContainer,
    MainHeading,
    LabelledScore,
    Rules,
    Button
  }
})
</script>