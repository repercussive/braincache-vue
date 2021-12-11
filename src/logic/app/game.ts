import { reactive, readonly } from 'vue'
import getRandomArrayItem from '@/logic/util/getRandomArrayItem'
import shuffleArray from '@/logic/util/shuffleArray'
import allWords from '@/assets/words'

type GameState = {
  score: number
  lives: number
  levelData: LevelData
  status: GameStatus
}
type LevelData = { options: string[]; correctOption: string }
export type GameStatus = 'waiting' | 'correct-answer' | 'incorrect-answer' | 'ended'

const initialState: GameState = {
  score: 0,
  lives: 3,
  levelData: { options: [], correctOption: '' },
  status: 'waiting',
}

const gameState = reactive({
  ...initialState,
})

const createGame = () => {
  let unseenWords: string[], seenWords: string[]

  const initializeWords = () => {
    unseenWords = allWords
    seenWords = []
  }

  const pickRandomUnseenWord = () => {
    const newWord = getRandomArrayItem(unseenWords)
    unseenWords = unseenWords.filter((word) => word !== newWord)
    return newWord
  }

  const pickRandomSeenWords = () => {
    shuffleArray(seenWords)
    return seenWords.slice(0, Math.min(seenWords.length, 2))
  }

  const handleCorrectAnswer = () => {
    gameState.status = 'correct-answer'
    gameState.score += 1
  }

  const handleIncorrectAnswer = () => {
    gameState.status = 'incorrect-answer'
    gameState.lives -= 1
  }

  const handleGameEnd = () => {
    gameState.status = 'ended'
    // todo: save score
  }

  initializeWords()

  return {
    state: readonly(gameState),

    reset: () => {
      Object.assign(gameState, initialState)
      initializeWords()
    },

    generateLevel: () => {
      gameState.status = 'waiting'
      const correctOption = pickRandomUnseenWord()
      const incorrectOptions = pickRandomSeenWords()
      const options = [correctOption, ...incorrectOptions]
      shuffleArray(options)

      seenWords.push(correctOption)
      gameState.levelData = { options, correctOption }

      return gameState.levelData
    },

    submitAnswer: (answer: string) => {
      const correctAnswer = gameState.levelData.correctOption
      const isCorrect = answer === correctAnswer

      if (isCorrect) {
        handleCorrectAnswer()
      } else {
        handleIncorrectAnswer()
      }
    },

    checkHasGameEnded: () => {
      const { lives } = gameState
      if (lives === 0 || unseenWords.length === 0) {
        handleGameEnd()
        return true
      }
      return false
    },
  }
}

export default createGame()