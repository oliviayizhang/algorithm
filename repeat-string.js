//Repeat s->string, n->n times

//Using ES6 repeat()
let repeatStr = (s, n) => {
  return s.repeat(n)
}

console.log(repeatStr('Hello', 4));

//Using while loop
let repeatStr = (s, n) => {
  let repeatedString = ''
  while (n > 0) {
    repeatedString += s
    n--
  }
  return repeatedString
}

console.log(repeatStr('NiHao', 1));

//Using recursion and conditional
let repeatStr = (s, n) => {
  if (n > 0) {
    return s + repeatStr(s, n - 1)
  } else {
    return ''
  }
}

console.log(repeatStr('Hola', 2));
