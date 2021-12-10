<template>
  <ViewportCentered>
    <MainHeading />
    <Spacer :mb="8" />
    <StyledContainer>How many words can you hold in your head?</StyledContainer>
    <Spacer :mb="8" />
    <ScoreDisplay label="Your best score:" :score="-1" />
    <Spacer :mb="8" />
    <Rules />
    <Spacer :mb="12" />
    <Button>Start</Button>
  </ViewportCentered>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import MainHeading from '@/components/screens/welcome/MainHeading.vue'
import ViewportCentered from '@/components/modular/ViewportCentered.vue'
import Spacer from '@/components/modular/Spacer.vue'
import StyledContainer from '@/components/modular/StyledContainer.vue'
import ScoreDisplay from '@/components/modular/ScoreDisplay.vue'
import Rules from '@/components/screens/welcome/Rules.vue'
import Button from '@/components/modular/Button.vue'

export default defineComponent({
  components: {
    ViewportCentered,
    Spacer,
    StyledContainer,
    MainHeading,
    ScoreDisplay,
    Rules,
    Button
  }
})
</script>