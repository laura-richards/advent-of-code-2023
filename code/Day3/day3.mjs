export { findAnswer }
import { readFileAsync } from '../../fileUtils.mjs'

//function to find and add the valid numbers in each line
function getValidNumbers(line, lineIndex, separatedData) {
  const lineArray = line.split('')
  let lineIndexes = []
  const finalLineArray = []
  lineArray.map((char, i) => {
    if (!isNaN(Number(char))) {
      lineIndexes.push(i)
      if (isNaN(lineArray[i + 1])) {
        finalLineArray.push(lineIndexes)
        lineIndexes = []
      }
    }
  })

  const priorLine = separatedData[lineIndex - 1]
  const nextLine = separatedData[lineIndex + 1]
  const validIndexes = []
  finalLineArray.map((array) => {
    array.map((index) => {
      if (validIndexes.includes(array)) {
        return
      }
      if (lineIndex !== 0) {
        if (validIndexes.includes(array)) {
          return
        }
        if (
          priorLine[index - 1] &&
          priorLine[index - 1] !== '.' &&
          isNaN(Number(priorLine[index - 1]))
        ) {
          console.log(priorLine[index - 1], index, 1)
          validIndexes.push(array)
          return
        }
        if (
          priorLine[index] &&
          priorLine[index] !== '.' &&
          isNaN(Number(priorLine[index]))
        ) {
          console.log(priorLine[index], index, 2)
          validIndexes.push(array)
          return
        }
        if (
          priorLine[index + 1] &&
          priorLine[index + 1] !== '.' &&
          isNaN(Number(priorLine[index + 1]))
        ) {
          console.log(priorLine[index + 1], index)
          validIndexes.push(array)
          return
        }
      }
      if (nextLine !== undefined) {
        if (
          nextLine[index - 1] &&
          nextLine[index - 1] !== '.' &&
          isNaN(Number(nextLine[index - 1]))
        ) {
          console.log(nextLine[index - 1], index, 4)
          validIndexes.push(array)
          return
        }
        if (
          nextLine[index] &&
          nextLine[index] !== '.' &&
          isNaN(Number(nextLine[index]))
        ) {
          console.log(nextLine[index], index, 5)
          validIndexes.push(array)
          return
        }
        if (
          nextLine[index + 1] &&
          nextLine[index + 1] !== '.' &&
          isNaN(Number(nextLine[index + 1]))
        ) {
          console.log(nextLine[index + 1], index, 6)
          validIndexes.push(array)
          return
        }
        if (
          lineArray[index - 1] &&
          lineArray[index - 1] !== '.' &&
          isNaN(Number(lineArray[index - 1]))
        ) {
          console.log(lineArray[index - 1], index, 7)
          validIndexes.push(array)
          return
        }
        if (
          lineArray[index + 1] &&
          lineArray[index + 1] !== '.' &&
          isNaN(Number(lineArray[index + 1]))
        ) {
          console.log(lineArray[index + 1], index, 8)
          validIndexes.push(array)
          return
        }
      }
    })
  })
  const validNumbers = []
  validIndexes.map((array) => {
    let combinedNumber = 0
    for (let i = 0; i < array.length; i++) {
      combinedNumber += lineArray[array[i]]
    }
    validNumbers.push(Number(combinedNumber))
  })
  console.log(validNumbers)
  const numSum = validNumbers.reduce((acc, curr) => (acc += curr), 0)
  return numSum
}

//function to call other function on the data and add it up
function findAnswer(data) {
  console.log(data)
  const separatedData = data.split('\n')
  let total = 0
  separatedData.map((line, index) => {
    total += getValidNumbers(line, index, separatedData)
  })
  return total
}

const data = await readFileAsync('./code/Day3/day3data.txt')
console.log(findAnswer(data))
