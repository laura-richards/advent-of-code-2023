import { describe, test, expect } from 'vitest'
import { calculateGame, calculateTotal } from './day4.mjs'

const game1 = 'Card 1: 41 48 83 86 17 | 83 86  6 31 17  9 48 53'
const game2 = 'Card 2: 13 32 20 16 61 | 61 30 68 82 17 32 24 19'
const game3 = 'Card 3:  1 21 53 59 44 | 69 82 63 72 16 21 14  1'
const game4 = 'Card 4: 41 92 73 84 69 | 59 84 76 51 58  5 54 83'
const game5 = 'Card 5: 87 83 26 28 32 | 88 30 70 12 93 22 82 36'
const game6 = 'Card 6: 31 18 13 56 72 | 74 77 10 23 35 67 36 11'
const fullSample = `Card 1: 41 48 83 86 17 | 83 86  6 31 17  9 48 53
Card 2: 13 32 20 16 61 | 61 30 68 82 17 32 24 19
Card 3:  1 21 53 59 44 | 69 82 63 72 16 21 14  1
Card 4: 41 92 73 84 69 | 59 84 76 51 58  5 54 83
Card 5: 87 83 26 28 32 | 88 30 70 12 93 22 82 36
Card 6: 31 18 13 56 72 | 74 77 10 23 35 67 36 11`

describe.skip('Correctly calculates day 2 part one game lines', () => {
  test('calculateValue works out value of Game1', () => {
    const game1Value = calculateGame(game1)
    expect(game1Value).toBe(8)
  })
  test('calculateValue works out value of Game2', () => {
    const game1Value = calculateGame(game2)
    expect(game1Value).toBe(2)
  })
  test('calculateValue works out value of Game3', () => {
    const game1Value = calculateGame(game3)
    expect(game1Value).toBe(2)
  })
  test('calculateValue works out value of Game4', () => {
    const game1Value = calculateGame(game4)
    expect(game1Value).toBe(1)
  })
  test('calculateValue works out value of Game5', () => {
    const game1Value = calculateGame(game5)
    expect(game1Value).toBe(0)
  })
  test('calculateValue works out value of Game6', () => {
    const game1Value = calculateGame(game6)
    expect(game1Value).toBe(0)
  })
})

describe.skip('CalculateSum works out the total for part 1', () => {
  test('Use calculateSum to work out sum', () => {
    const sampleValue = calculateTotal(fullSample)
    expect(sampleValue).toBe(13)
  })
})

describe('CalculateSum works out the total for part 2', () => {
  test('Use calculateSum to work out sum', () => {
    const sampleValue = calculateTotal(fullSample)
    expect(sampleValue).toBe(30)
  })
})
