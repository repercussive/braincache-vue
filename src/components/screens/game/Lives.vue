<template>
  <Flex>
    <div class="container" v-for="{ index, animation } in livesData" :key="index">
      <Icon :size="1.65" color="life" :style="{ position: 'absolute', animation }">
        <HeartIcon />
      </Icon>
      <Icon :size="1.65" color="life-used" style="position: relative; z-index: -1;">
        <HeartIcon />
      </Icon>
    </div>
  </Flex>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import game from '@/logic/app/game'
import Flex from '@/components/modular/Flex.vue'
import Icon from '@/components/modular/Icon.vue'
import HeartIcon from '@/components/icons/HeartIcon.vue'

export default defineComponent({
  name: 'Lives',
  components: {
    Flex,
    Icon,
    HeartIcon
  },
  computed: {
    livesData() {
      return Array.from({ length: 3 }).map((_, index) => {
        const isActive = game.state.lives > index
        return {
          animation: isActive ? 'none' : 'lose-life forwards 400ms',
          index
        }
      })
    }
  }
})
</script>

<style scoped lang="scss">
@use 'src/styles/util';

.container {
  position: relative;
  margin: 0 util.space(1);
}
</style>