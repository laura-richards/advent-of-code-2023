import { readFileAsync } from '../../fileUtils.mjs'

export { findAnswer, findLocation }

function findLocation(seed, maps) {
  let location = seed
  // console.log('maps:', maps)
  // console.log('location', seed)
  for (let i = 0; i < maps.length; i++) {
    let changed = false
    // console.log(maps[i])
    maps[i].forEach((obj) => {
      if (changed) {
        return location
      }
      // console.log(obj)
      if (location >= obj.inputMin && location <= obj.inputMax) {
        // console.log('change location', location)
        // console.log('line', i, obj)
        location = location - obj.inputMin + obj.outputMin
        // console.log('changed location', location)
        changed = true
        return
      }
    })
  }
  return location
}

function findAnswer(data) {
  const splitData = data.split('\n\n')
  const seeds = splitData[0].split(': ')[1].split(' ')
  const maps = []
  let map = []
  let locations = []
  for (let i = 0; i < splitData.length; i++) {
    if (splitData[i].includes('-to-')) {
      let title = splitData[i].split(' map:\n')
      // console.log(title)
      let lines = title[1].split('\n')
      // console.log(lines)
      for (let j = 0; j < lines.length; j++) {
        // console.log(lines[j])
        let line = lines[j].split(' ')
        let lineValues = {
          outputMin: Number(line[0]),
          outputMax: Number(line[0]) + Number(line[2]) - 1,
          inputMin: Number(line[1]),
          inputMax: Number(line[1]) + Number(line[2]) - 1,
        }
        // console.log(lineValues)
        map.push(lineValues)
      }
      // console.log(map)
      maps.push(map)
      map = []
    }
  }
  seeds.forEach((element) => {
    const location = findLocation(Number(element), maps)
    locations.push(location)
  })

  locations.sort((a, b) => a - b)
  // console.log(maps)
  // console.log('seeds:', seeds)
  // console.log('splitData:', splitData)
  return locations[0]
}

const data = await readFileAsync('./code/Day5/day5data.txt')
console.log(findAnswer(data))
