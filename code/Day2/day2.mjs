export { calculateGame, calculateTotal }
import { readFileAsync } from '../../fileUtils.mjs'

function calculateGame(game) {
  const splitGame = game.split(':')
  let id = Number(splitGame[0].replace(/Game/, ''))
  const rounds = splitGame[1].split(';')
  const combinedList = rounds.join(',').split(',')
  let red = []
  let blue = []
  let green = []
  combinedList.map((item) => {
    if (item.includes('blue')) {
      const num = Number(item.replace(/\D/g, ''))
      blue.push(num)
    }
    if (item.includes('red')) {
      const num = Number(item.replace(/\D/g, ''))
      red.push(num)
    }
    if (item.includes('green')) {
      const num = Number(item.replace(/\D/g, ''))
      green.push(num)
    }
  })
  red.map((x) => {
    if (x > 12) {
      id = 0
      return
    }
  })
  blue.map((x) => {
    if (x > 14) {
      id = 0
      return
    }
  })
  green.map((x) => {
    if (x > 13) {
      id = 0
      return
    }
  })
  return id
}

function calculateTotal(game) {
  const splitGames = game.split('\n')
  const gameValues = []
  splitGames.map((game) => gameValues.push(calculateGame(game)))
  const total = gameValues.reduce((acc, curr) => acc + curr, 0)
  return total
}

const data = await readFileAsync('./code/Day2/day2-data.txt')
console.log(calculateTotal(data))
