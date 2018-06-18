//DNAStrand ("ATTGC") # return "TAACG"
//DNAStrand ("GTAT") # return "CATA"

const pairs = {A: 'T', T: 'A', C: 'G', G: 'C'}

let DNAStrand = (dna) => {
  return dna.split('').map(c => pairs[c]).join('')
}

console.log(DNAStrand('ATTGC'))
