<template>
  <StyledContainer color="text-accent" style="max-width: 20.5em">
    <ul>
      <li>Words will appear on the screen.</li>
      <li>Select the one you haven't seen.</li>
      <li>Don't select any words that you've seen before, or you'll lose a life.</li>
      <li>Most people score somewhere between 50 and 200.</li>
    </ul>
  </StyledContainer>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import StyledContainer from '@/components/modular/StyledContainer.vue'

export default defineComponent({
  components: {
    StyledContainer
  }
})
</script>

<style scoped lang="scss">
@use 'src/styles/util';

li {
  margin: util.space(4) 0;
}
</style>