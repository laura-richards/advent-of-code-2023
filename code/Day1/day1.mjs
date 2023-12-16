export { calculateValue, calculateSum }

function calculateValue(str) {
  const num = findNumbers(str)
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
