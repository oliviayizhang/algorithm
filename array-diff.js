let array_diff = (array_a, array_b) => {
  return array_a.filter(letter => !array_b.includes(letter))
}
console.log(array_diff([1,2,2,3,2],[2]));
