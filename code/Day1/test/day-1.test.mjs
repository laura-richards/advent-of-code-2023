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

const sample5 = 'two1nine'
const sample6 = 'eightwothree'
const sample7 = 'abcone2threexyz'
const sample8 = 'xtwone3four'
const sample9 = '4nineeightseven2'
const sample10 = 'zoneight234'
const sample11 = '7pqrstsixteen'

const fullSample2 = `${sample5}
${sample6}
${sample7}
${sample8}
${sample9}
${sample10}
${sample11}`

describe('Correctly calculates day 1 part two sample lines', () => {
  test('calculateValue works out value of Sample5', () => {
    const sample1Value = calculateValue(sample5)
    expect(sample1Value).toBe(29)
  })
  test('calculateValue works out value of Sample6', () => {
    const sample1Value = calculateValue(sample6)
    expect(sample1Value).toBe(83)
  })
  test('calculateValue works out value of Sample7', () => {
    const sample1Value = calculateValue(sample7)
    expect(sample1Value).toBe(13)
  })
  test('calculateValue works out value of Sample8', () => {
    const sample1Value = calculateValue(sample8)
    expect(sample1Value).toBe(24)
  })
})

describe('CalculateSum works out the second total', () => {
  test('Use calculateSum to work out sum', () => {
    const sampleValue = calculateSum(fullSample2)
    expect(sampleValue).toBe(281)
  })
})
