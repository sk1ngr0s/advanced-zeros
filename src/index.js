module.exports = function getZerosCount(number, base) {
  // your implementation
  let j = 0
  let i = 2
  let a = new Array
  let countZero = 0
  let trueCount = []

  while (i <= base) {
    let count = 0
    if (base % i === 0) {
      while (base % i === 0) {
        count += 1
        base /= i
      }
      a[j] = new Array
      a[j][0] = i
      a[j][1] = count
      j++
    } else {
      i++
    }
  }
  let pow = 0
  for (let i = 0; i < a.length; i++) {
    pow = a[i][0]
    while (Math.floor(number / pow) !== 0) {
      countZero += Math.floor(number / pow)
      pow = a[i][0] * pow
    }
    trueCount[i] = countZero
  }

  function compareNumeric(a, b) {
    if (a > b) return 1;
    if (a < b) return -1;
  }
  let res = trueCount.sort(compareNumeric)
  return res[0]
}