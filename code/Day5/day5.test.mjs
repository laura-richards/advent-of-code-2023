import { expect, test, describe } from 'vitest'
import { findLocation, findAnswer } from './day5.mjs'

const sampleData = `seeds: 79 14 55 13

seed-to-soil map:
50 98 2
52 50 48

soil-to-fertilizer map:
0 15 37
37 52 2
39 0 15

fertilizer-to-water map:
49 53 8
0 11 42
42 0 7
57 7 4

water-to-light map:
88 18 7
18 25 70

light-to-temperature map:
45 77 23
81 45 19
68 64 13

temperature-to-humidity map:
0 69 1
1 0 69

humidity-to-location map:
60 56 37
56 93 4`

describe('Correctly calculates day 5 part 1 seed 1', () => {
  test('calculateValue works out location of seed 1', () => {
    const seedLocation = findLocation(79)
    expect(seedLocation).toBe(81)
  })
  test('calculateValue works out value of seed2', () => {
    const seedLocation = findLocation(14)
    expect(seedLocation).toBe(43)
  })
  test('calculateValue works out value of Game3', () => {
    const seedLocation = findLocation(5)
    expect(seedLocation).toBe(86)
  })
  test('calculateValue works out value of Game4', () => {
    const seedLocation = findLocation(13)
    expect(seedLocation).toBe(35)
  })
})

describe('findAnswer works out the lowest location for part 1', () => {
  test('Use findAnswer to work out answer', () => {
    const lowestLocation = findAnswer(sampleData)
    expect(lowestLocation).toBe(46)
  })
})
