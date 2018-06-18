//count the sheep

//my solution
// function countSheeps(arrayOfSheep) {
//   let count = 0
//   arrayOfSheep.forEach(sheep => {
//     if (sheep) count += 1
//   })
//   return count
// }

//Using Filter()
let countSheeps = (arrayOfSheep) => arrayOfSheep.filter(sheep => sheep).length


let countSheeps = (arrayOfSheep) => arrayOfSheep.filter(Boolean)

//using Boolean to filter out all falsy values

let array1 = [true,  true,  true,  false,
              true,  true,  true,  true ,
              true,  false, true,  false,
              true,  false, false, true ,
              true,  true,  true,  true ,
              false, false, true,  true ];

console.log(countSheeps(array1));
