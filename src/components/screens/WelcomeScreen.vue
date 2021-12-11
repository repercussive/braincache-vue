<template>
  <ViewportCentered>
    <MainHeading />
    <Spacer :mb="8" />
    <StyledContainer>How many words can you hold in your head?</StyledContainer>
    <Spacer :mb="8" />
    <LabelledScore label="Your best score:" :score="-1" />
    <Spacer :mb="8" />
    <Rules />
    <Spacer :mb="12" />
    <Button @click="startGame">Start</Button>
  </ViewportCentered>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import appScreen from '@/logic/app/appScreen'
import MainHeading from '@/components/screens/welcome/MainHeading.vue'
import ViewportCentered from '@/components/modular/ViewportCentered.vue'
import Spacer from '@/components/modular/Spacer.vue'
import StyledContainer from '@/components/modular/StyledContainer.vue'
import LabelledScore from '@/components/modular/LabelledScore.vue'
import Rules from '@/components/screens/welcome/Rules.vue'
import Button from '@/components/modular/Button.vue'

export default defineComponent({
  name: 'WelcomeScreen',
  methods: {
    startGame: () => appScreen.set('game')
  },
  components: {
    ViewportCentered,
    Spacer,
    StyledContainer,
    MainHeading,
    LabelledScore,
    Rules,
    Button
  }
})
</script>