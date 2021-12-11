<template>
  <Flex center column>
    <WordButton
      v-for="{ word, variant, index } in wordsData"
      @click="submitAnswer(word)"
      :animation="animation"
      :variant="variant"
      :key="index"
    >{{ word }}</WordButton>
  </Flex>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'
import game from '@/logic/app/game'
import appScreen from '@/logic/app/appScreen'
import sleep from '@/logic/util/sleep'
import WordButton from '@/components/screens/game/WordButton.vue'
import Flex from '@/components/modular/Flex.vue'

let lastSelectedWord = ''
let animation = ref<'enter' | 'exit'>()

export default defineComponent({
  name: 'WordOptions',
  data() {
    return { animation }
  },
  created() {
    if (!game.state.levelData.correctOption) {
      game.generateLevel()
    }
    animation.value = 'enter'
  },
  methods: {
    submitAnswer: async (answer: string) => {
      game.submitAnswer(answer)
      lastSelectedWord = answer
      await sleep(game.state.status === 'incorrect-answer' ? 1600 : 750)
      animation.value = 'exit'
      await sleep(400)

      if (game.checkHasGameEnded()) {
        appScreen.set('game-end')
      } else {
        game.generateLevel()
        animation.value = 'enter'
      }
    }
  },
  computed: {
    wordsData() {
      return Array.from({ length: 3 }).map((_, index) => {
        const { options } = game.state.levelData
        const word = index < options.length ? options[index] : ''
        const variant = getButtonVariant(word)

        return {
          word,
          variant,
          index
        }
      })
    }
  },
  components: {
    Flex,
    WordButton
  }
})

function getButtonVariant(word: string) {
  if (!word) return 'empty'

  const isCorrectAnswer = () => game.state.levelData.correctOption === word

  if (game.state.status === 'correct-answer' && isCorrectAnswer()) {
    return 'correct'
  }

  if (game.state.status === 'incorrect-answer') {
    if (isCorrectAnswer()) {
      return 'missed'
    }
    if (word === lastSelectedWord) {
      return 'incorrect'
    }
  }
}
</script>

<style scoped lang="scss">
@use 'src/styles/util';

button {
  margin: util.space(4) 0;
}
</style>