//Find unique number

let findUniq = (arr) => {
  for(let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[0]) {
      return arr[i]
    }
  }
}

console.log(findUniq([ 2, 1, 1, 1, 1, 1 ]));
