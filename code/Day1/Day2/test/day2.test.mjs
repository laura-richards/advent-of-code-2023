import { describe, test, expect } from 'vitest'
import { calculateGame, calculateTotal } from '../day2.mjs'

const fullSample =
  describe('Correctly calculates day 2 part one game lines', () => {
    test('calculateValue works out value of Game1', () => {
      const game1Value = calculateGame(game1)
      expect(game1Value).toBe(12)
    })
    test('calculateValue works out value of Sample2', () => {
      const game1Value = calculateGame(game2)
      expect(game1Value).toBe(38)
    })
    test('calculateValue works out value of Sample3', () => {
      const game1Value = calculateGame(game3)
      expect(game1Value).toBe(15)
    })
    test('calculateValue works out value of Sample4', () => {
      const game1Value = calculateGame(game4)
      expect(game1Value).toBe(77)
    })
  })

describe('CalculateSum works out the total', () => {
  test('Use calculateSum to work out sum', () => {
    const sampleValue = calculateTotal(fullSample)
    expect(sampleValue).toBe(142)
  })
})
