export { calculateGame, calculateTotal }
import { readFileAsync } from '../../fileUtils.mjs'

function calculateGame(game) {
  let total = 0
  const splitCard = game.split(': ')
  const splitGame = splitCard[1].split(' | ')
  const winningNums = splitGame[0].split(' ')
  const gameNums = splitGame[1].split(' ')
  // console.log(gameNums)
  // console.log(winningNums)

  const matches = winningNums.map((num) => {
    if (num === '') {
      return
    }
    if (gameNums.includes(num)) {
      if (total === 0) {
        total = 1
        return
      }
      total++
    }
    return total
  })
  // console.log(matches)
  return { id: splitCard[0], matches: total, copies: 1 }
  // return total
}

function calculateTotal(data) {
  const splitGames = data.split('\n')
  let total = 0
  const cards = splitGames.map((game) =>
    // console.log(total),
    calculateGame(game)
  )
  // console.log(cards)
  cards.forEach((card, index) => {
    for (let i = 0; i < card.copies; i++) {
      for (let j = 0; j < card.matches; j++) {
        let nextCard = cards[index + j + 1]
        nextCard.copies = nextCard.copies + 1
        // console.log(nextCard.id, nextCard.copies, j)
      }
    }
  })
  // console.log(cards)
  total = cards.reduce((acc, cur) => acc + cur.copies, 0)
  return total
}

const data = await readFileAsync('./code/Day4/day4data.txt')
console.log(calculateTotal(data))
