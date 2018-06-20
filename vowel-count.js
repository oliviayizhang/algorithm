//Vowel Count

let getCount = (str) => {
  array = str.split('')
  count = array.filter(letter => letter == 'a' || letter == 'e' || letter == 'i' || letter == 'o' || letter == 'u')
  return count.length
}

console.log(getCount('alkjgelaisaelgo'));

//Best Practice
function getCount(str) {
  return (str.match(/[aeiou]/ig)||[]).length;
}
