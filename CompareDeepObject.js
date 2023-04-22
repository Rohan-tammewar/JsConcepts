// const obj = { a: 1, b: [1, 2, 3] }
// const obj1 = { a: 1, b: ['1', '2', '3'] }
// // console.log(JSON.stringify(obj), JSON.stringify(obj).length)

// console.log(Array.isArray(obj.b))
// console.log(Array.isArray(obj1.b))
// console.log(obj.b === obj1.b)

const areDeeplyEqual = function (o1, o2) {
  // checking if they are equal
  if (o1 === o2) return true
  //If not they may be object ot null
  if (
    typeof o1 !== 'object' ||
    o2 == null ||
    o1 == null ||
    typeof o2 !== 'object'
  )
    return false
  //if not one of them can be array
  if (Array.isArray(o1) !== Array.isArray(o2)) return false
  //maybe object with different number of keys
  if (Object.keys(o1).length !== Object.keys(o2).length) return false

  let key1 = Object.keys(o1)
  let key2 = Object.keys(o2)

  if (key1.length !== key2.length) return false

  return key1.every(
    (key) => key2.includes(key) && areDeeplyEqual(o1[key], o2[key]),
  )
}

let o1 = { x: 1, y: 2 }
let o2 = { x: 1, y: 2 }
console.log(areDeeplyEqual(o1, o2))
