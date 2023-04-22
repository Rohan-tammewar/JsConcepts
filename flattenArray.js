//fails with runtime error for bigger input
let flattened = []
let flat3 = function (arr, n, flattened = []) {
  if (n == 0) {
    return arr
  }
  let idx = 0
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      for (j = 0; j < arr[i].length; j++) {
        flattened[idx] = arr[i][j]
        idx++
      }
    } else {
      flattened[idx] = arr[i]
      idx++
    }
  }
  arr = [...flattened]
  flat(arr, n - 1, flattened)

  return flattened
}

// let arr = [1, 2, 3, [4, 5]]
// let arr1 = []
// arr1.push([...arr[3]])
// let a

//To optimized the solution apply recurrsion when the index is an array

const flat = function (arr) {
  if (arr.length == 1) return arr
  let flattened = []
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      flattened.push(...flat(arr[i]))
    } else {
      flattened.push(arr[i])
    }
  }
  return flattened
}
console.log(flat([1, 2, 3, [4, [5, [8, 9]], 6, 7]]))
//faster solution
