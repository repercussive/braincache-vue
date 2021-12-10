<template>
  <div class="component">
    <Flex center column>
      <slot />
    </Flex>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Flex from '@/components/modular/Flex.vue'
export default defineComponent({
  components: {
    Flex
  }
})
</script>

<style scoped lang="scss">
@use 'src/styles/util';

.component {
  position: absolute;
  top: 50%;
  right: var(--padding-page);
  left: var(--padding-page);
  transform: translateY(-50%);

  @media only screen and (min-width: #{util.$break-s}) {
    top: 40vh;
  }
}
</style>