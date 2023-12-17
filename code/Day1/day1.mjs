export { calculateValue, calculateSum }
import { readFileAsync } from '../../fileUtils.mjs'

function calculateValue(str) {
  const wordList = str
    .replace(/one/g, 'o1e')
    .replace(/two/g, 't2o')
    .replace(/three/g, 't3e')
    .replace(/four/g, 'f4r')
    .replace(/five/g, 'f5e')
    .replace(/six/g, 's6x')
    .replace(/seven/g, 's7n')
    .replace(/eight/g, 'e8t')
    .replace(/nine/g, 'n9e')
    .replace(/zero/g, 'z0o')
  const num = findNumbers(wordList)
  const separateNum = num.toString().split('')
  const value = Number(separateNum[0] + separateNum[separateNum.length - 1])
  return value
}

function findNumbers(str) {
  const list = str.replace(/\D+/g, '')
  return list
}

function calculateSum(str) {
  const lines = str.split('\n')
  const lineValues = lines.map((line) => calculateValue(line))
  const total = lineValues.reduce((acc, curr) => acc + curr, 0)
  return total
}

const data = await readFileAsync('./code/Day1/day1-data.txt')
console.log(calculateSum(data))
