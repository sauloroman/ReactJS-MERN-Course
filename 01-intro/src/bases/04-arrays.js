const myArray = new Array(100)
console.log(myArray)

const array = [1, 2, 3, 4]
array.push(5)
array.push(6)
array.push(7)
array.push(8)
console.log(array)

let array2 = [ ...array ]
console.log(array2)

const array3 =  array.map( function(number) {
  return number * 2
})
console.log(array3)