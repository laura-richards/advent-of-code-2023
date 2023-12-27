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
  winningNums.map((num) => {
    if (num === '') { return}
   if (gameNums.includes(num)) {
    if (total === 0 ) {
      total = 1 
      return
    }
    total = total * 2
    return
  }})  
  // console.log(total)
  return total
}

function calculateTotal(data) {
    const splitGames = data.split('\n')
    let total = 0
    splitGames.map((game) => (
      // console.log(total),
      total += calculateGame(game)))
    return total
  }


  const data = await readFileAsync('./code/Day4/day4data.txt')
console.log(calculateTotal(data))
