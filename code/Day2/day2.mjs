export { calculateGame, calculateTotal, calculatePower, calculatePowers }
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
  //PART ONE
  // red.map((x) => {
  //   if (x > 12) {
  //     id = 0
  //     return
  //   }
  // })
  // blue.map((x) => {
  //   if (x > 14) {
  //     id = 0
  //     return
  //   }
  // })
  // green.map((x) => {
  //   if (x > 13) {
  //     id = 0
  //     return
  //   }
  // })
  // return id
  const greenHigh = green.reduce(
    (acc, cur) => (cur < acc ? (cur = acc) : cur),
    0
  )
  const redHigh = red.reduce((acc, cur) => (cur < acc ? (cur = acc) : cur), 0)
  const blueHigh = blue.reduce((acc, cur) => (cur < acc ? (cur = acc) : cur), 0)
  return greenHigh * blueHigh * redHigh
}

function calculateTotal(game) {
  const splitGames = game.split('\n')
  const gameValues = []
  splitGames.map((game) => gameValues.push(calculateGame(game)))
  const total = gameValues.reduce((acc, curr) => acc + curr, 0)
  return total
}

function calculatePower(game) {
  const splitGames = game.split('\n')
  let total = 0
  splitGames.map((game) => (total += calculateGame(game)))
  return total
}
const data = await readFileAsync('./code/Day2/day2-data.txt')
console.log(calculatePower(data))
