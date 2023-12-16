import { calculateValue, calculateSum } from '../day1.mjs'
import { expect, describe, test } from 'vitest'

const sample1 = '1abc2'
const sample2 = 'pqr3stu8vwx'
const sample3 = 'a1b2c3d4e5f'
const sample4 = 'treb7uchet'
const fullSample = `${sample1}
${sample2}
${sample3}
${sample4}`

describe('Correctly calculates day 1 part one sample lines', () => {
  test('calculateValue works out value of Sample1', () => {
    const sample1Value = calculateValue(sample1)
    expect(sample1Value).toBe(12)
  })
  test('calculateValue works out value of Sample1', () => {
    const sample1Value = calculateValue(sample2)
    expect(sample1Value).toBe(38)
  })
  test('calculateValue works out value of Sample1', () => {
    const sample1Value = calculateValue(sample3)
    expect(sample1Value).toBe(15)
  })
  test('calculateValue works out value of Sample1', () => {
    const sample1Value = calculateValue(sample4)
    expect(sample1Value).toBe(77)
  })
})

describe('CalculateSum works out the total', () => {
  test('Use calculateSum to work out sum', () => {
    const sampleValue = calculateSum(fullSample)
    expect(sampleValue).toBe(142)
  })
})
