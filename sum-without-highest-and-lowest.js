//Sum without highest and lowest number
let sumArray = array => {

  if (array == null) {
    return 0
  } else if (array.length < 2) {
    return 0
  } else {
    array.sort(function(a,b) {
      return a - b
    })
    let sum = 0
    for (let i = 1; i < array.length - 1; i++) {
      sum += array[i]
    }
    return sum
  }
}

console.log(sumArray([6, 2, 1, 8, 10]));
