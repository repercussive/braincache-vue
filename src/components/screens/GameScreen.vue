<template>
  <ViewportCentered>
    <Score />
    <Spacer :mb="12" />
    <Lives />
    <Spacer :mb="8" />
    <WordOptions />
    <Spacer :mb="12" />
    <StatusText />
  </ViewportCentered>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Score from '@/components/screens/game/Score.vue'
import Lives from '@/components/screens/game/Lives.vue'
import WordOptions from '@/components/screens/game/WordOptions.vue'
import StatusText from '@/components/screens/game/StatusText.vue'
import ViewportCentered from '@/components/modular/ViewportCentered.vue'
import Spacer from '@/components/modular/Spacer.vue'

export default defineComponent({
  name: 'GameScreen',
  components: {
    ViewportCentered,
    Spacer,
    Score,
    Lives,
    WordOptions,
    StatusText,
  }
})
</script>