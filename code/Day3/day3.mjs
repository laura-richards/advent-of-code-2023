export  { findAnswer }
import { readFileAsync } from '../../fileUtils.mjs'


function getValidNumbers(separatedData) {
  const splitData = []
  const gearIndexes = []
  const numberArrays = []
  let lineIndexes = []
  for (let i = 0; i < separatedData.length; i++) {
    splitData.push(separatedData[i].split(''))
  }
  // console.log(splitData)
  for (let i = 0; i < splitData.length; i++) {
    for (let j = 0; j < splitData[i].length; j++) {
      
      if (!isNaN(Number(splitData[i][j]))) {
        lineIndexes.push([i, j])
        // console.log(lineIndexes)
        if (isNaN(splitData[i][j + 1])) {
          numberArrays.push(lineIndexes)
          lineIndexes = []
        }
      }
    }
  }
  let gears =[]
  numberArrays.map((array, index) => {
    array.map((arr) => {
      if (gears.find((gear) => gear.array === index)) {
        return
      }
      if (arr[0] !== 0) {
        if (separatedData[arr[0] - 1][arr[1] - 1] === '*') {
          gears.push({ array: index, gear: [arr[0] - 1, arr[1]-1] })
          return
        }
        if (separatedData[arr[0] - 1][arr[1]] === '*') {
          gears.push({ array: index, gear: [arr[0] - 1, arr[1]] })
          return
        }
        if (separatedData[arr[0] - 1][arr[1] + 1] === '*') {
          gears.push({ array: index, gear: [arr[0] - 1, arr[1] + 1] })
          return
        }
      }
      if (separatedData[arr[0]][arr[1] - 1] === '*') {
        gears.push({ array: index, gear: [arr[0], arr[1] - 1] })
        return
      }
      if (separatedData[arr[0]][arr[1] + 1] === '*') {
        gears.push({ array: index, gear: [arr[0], arr[1] + 1] })
        return
      }

      if (separatedData[arr[0] + 1] !== undefined) {
        if (separatedData[arr[0] + 1][arr[1] + 1] === '*') {
          gears.push({ array: index, gear: [arr[0] + 1, arr[1] + 1] })
          console.log(arr[0] + 1, arr[1] + 1)
          return
        }
        if (separatedData[arr[0] + 1][arr[1]] === '*') {
          gears.push({ array: index, gear: [arr[0] + 1, arr[1]] })
          console.log(arr[0] + 1, arr[1])
          return
        }
        if (separatedData[arr[0] + 1][arr[1] - 1] === '*') {
          gears.push({ array: index, gear: [arr[0] + 1, arr[1] - 1] })
          console.log(arr[0] + 1, arr[1] - 1)
          return
        }
      }
    })
  })
    console.log(gears)  
    let numberPairs = []
    gears.map((gr) => {
      // console.log(gr.gear)
      if (!numberPairs.find((pair) => pair.some((gear) => gear.gear === gr.gear))) {
      let result = gears.filter((gear) => gear.gear[0] === gr.gear[0])
      let result2 = result.filter((gear) => gear.gear[1] === gr.gear[1])
      // console.log(result2)
      if (result2.length > 1) {
        numberPairs.push(result2)
      }
}})
   const powers = []
   numberPairs.map((pair) => {
    let nums = []
    for (let i = 0; i < pair.length; i++) {
      let num = numberArrays[pair[i].array]
      // console.log(num)
      let combinedNumber = 0
      num.map((array) => {
      combinedNumber += separatedData[array[0]][array[1]]
        // console.log(array)
          // console.log(combinedNumber) })
      })
      // console.log(combinedNumber)
    nums.push(Number(combinedNumber))
    } 
    // console.log(nums)
    const power = nums.reduce((acc, cur) => acc * cur, 1)
    // console.log(power)
    powers.push(power)
   })        
  // console.log(powers)
  return powers
  }
        
        
        
         
       
   
//function to call other function on the data and add it up
function findAnswer(data) {
  const separatedData = data.split('\n')
  let total = 0
  let nums = getValidNumbers(separatedData)
  total = nums.reduce((acc, cur) => acc += cur, 0)
  // separatedData.map((line, index) => {
  //   total += getValidNumbers(line, index, separatedData)
  // })
  return total
}

const data = await readFileAsync('./code/Day3/day3data.txt')
console.log(findAnswer(data))
