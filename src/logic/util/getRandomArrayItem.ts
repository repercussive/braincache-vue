export default function getRandomArrayItem<T>(array: T[]) {
  const randomIndex = Math.floor(Math.random() * array.length)
  return array[randomIndex]
}